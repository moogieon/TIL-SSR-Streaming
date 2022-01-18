import { getRelaySerializedState } from "relay-nextjs";
import { withHydrateDatetime } from "relay-nextjs/date";
import { Environment, Network, Store, RecordSource } from "relay-runtime";

export function createClientNetwork() {
  return Network.create((text, variables) =>
    fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: text,
        variables,
      }),
    }).then((response) => response.json())
  );
}

let clientEnv: Environment | undefined;
export function getClientEnvironment() {
  if (typeof globalThis.window === "undefined") return null;

  if (clientEnv == null) {
    clientEnv = new Environment({
      network: createClientNetwork(),
      store: new Store(new RecordSource(getRelaySerializedState()?.records)),
      isServer: false,
    });
  }

  return clientEnv;
}
