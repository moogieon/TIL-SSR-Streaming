import { Environment, Network, RecordSource, Store } from "relay-runtime";

const store = new Store(new RecordSource());
const network = Network.create((operation, variables) => {
  return fetch("https://api.mocki.io/v2/c4d7a195/graphql", {
    method: "POST",
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then((response) => {
    return response.json();
  });
});
const environment = new Environment({
  network,
  store,
});
// Fetch data from GitHub's GraphQL API:

// Get the response as JSON

export default environment;
