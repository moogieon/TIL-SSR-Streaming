import { graphql } from "graphql";
import { withHydrateDatetime } from "relay-nextjs/date";
import {
  Environment,
  GraphQLResponse,
  Network,
  RecordSource,
  Store,
} from "relay-runtime";

export function createServerNetwork() {
  return Network.create(async (operation, variables) => {
    const results = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: operation.text,
        variables,
      }),
    });
    const resultText = await results.text();

    const data = JSON.parse(resultText, withHydrateDatetime) as GraphQLResponse;

    return data;
  });
}

export function createServerEnvironment() {
  return new Environment({
    network: createServerNetwork(),
    store: new Store(new RecordSource()),
    isServer: true,
  });
}
