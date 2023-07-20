import { Environment, Network, RecordSource, Store } from 'relay-runtime';


function fetchGraphQL(params, variables) {
  return fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Authorization': `bearer ${process.env.REACT_APP_GITHUB_AUTH_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: params.text,
      variables,
    }),
  })
    .then((res) => res.json())
    .then(json => {
      console.log(`Fetched query ${params.name}`, { params });
      return json;
    });
}


export const RelayEnvironment = new Environment({
  network: Network.create(fetchGraphQL),
  store: new Store(new RecordSource()),
});
