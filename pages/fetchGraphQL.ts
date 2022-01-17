// your-app-name/src/fetchGraphQL.js
async function fetchGraphQL(user, users, todos) {
  // Fetch data from GitHub's GraphQL API:
  const response = await fetch("https://api.mocki.io/v2/c4d7a195/graphql", {
    method: "POST",
    body: JSON.stringify({
      query: user,
      users,
      todos,
    }),
  });

  // Get the response as JSON
  return await response.json();
}

export default fetchGraphQL;
