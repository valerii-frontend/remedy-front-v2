import React, { useEffect, useState } from 'react';
import { fetchGraphQL } from '../../utils.js';

import { UserContainer } from '../User/UserContainer.jsx';
import './RelayDemo.scss';


/**
 * @see https://relay.dev/docs/getting-started/step-by-step-guide/
 */


const RepositoryInfoQuery = `
  query RepositoryNameQuery {
    repository(owner: "egorvinogradov", name: "js-tetris") {
      name
      owner {
        login
      }
      diskUsage
      description
      createdAt
      repositoryTopics(first: 10) {
        edges {
          node {
            topic {
              name
            }
          }
        }
      }
    }
  }
`;


export function RelayDemo(){
  const [graphQLData, setGraphQLData] = useState(null);

  useEffect(() => {
    fetchGraphQL(RepositoryInfoQuery).then(setGraphQLData);
  }, []);

  return (
    <UserContainer>
      <div className="RelayDemo p-5">
        <div className="Global__app-content-max-width">
          <h1>Relay Demo</h1>
          {process.env.REACT_APP_GITHUB_AUTH_TOKEN}
          <hr/>
          <pre>
            {JSON.stringify(graphQLData, null, 2)}
          </pre>
        </div>
      </div>
    </UserContainer>
  );
}
