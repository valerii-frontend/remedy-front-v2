import React from 'react';
import { RelayEnvironment } from '../../RelayEnvironment.js';
import { graphql, loadQuery, usePreloadedQuery, useLazyLoadQuery } from 'react-relay';
import { UserContainer } from '../User/UserContainer.jsx';
import './RelayDemo.scss';


/**
 * @see https://relay.dev/docs/getting-started/step-by-step-guide/
 */


const RelayDemoTetrisQuery = graphql`
  query RelayDemoTetrisQuery {
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


const RelayDemoShellQuery = graphql`
  query RelayDemoShellQuery {
    repository(owner: "egorvinogradov", name: "shell-scripts") {
      name
      description
    }
  }
`;


const preloadedAppRepositoryInfoQuery = loadQuery(RelayEnvironment, RelayDemoShellQuery);



export function RelayDemo(){
  const dataPreload = usePreloadedQuery(RelayDemoShellQuery, preloadedAppRepositoryInfoQuery);
  const dataLazyLoad = useLazyLoadQuery(RelayDemoTetrisQuery);

  return (
    <UserContainer>
      <div className="RelayDemo p-5">
        <div className="Global__app-content-max-width">
          <h1>Relay Demo</h1>
          {process.env.REACT_APP_GITHUB_AUTH_TOKEN}
          <hr/>
          <h4>useLazyLoadQuery</h4>
          <pre>
            {JSON.stringify(dataLazyLoad, null, 2)}
          </pre>
          <hr/>
          <h4>usePreloadedQuery</h4>
          <pre>
            {JSON.stringify(dataPreload, null, 2)}
          </pre>
        </div>
      </div>
    </UserContainer>
  );
}
