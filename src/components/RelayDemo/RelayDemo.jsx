import React, { useEffect, useState } from 'react';


// import graphql from 'babel-plugin-relay/macro';
import { loadQuery, usePreloadedQuery, useLazyLoadQuery } from 'react-relay/hooks';

// import { graphql, useLazyLoadQuery } from 'react-relay';
// import { graphql } from 'relay-runtime';

// import { RelayEnvironment } from '../../RelayEnvironment.js';

// import { fetchGraphQL } from '../../utils.js';

import { UserContainer } from '../User/UserContainer.jsx';

import './RelayDemo.scss';
import { AppRepositoryInfoQuery } from '../App/App.jsx';
import { fetchGraphQL, graphql } from '../../utils.js';


/**
 * @see https://relay.dev/docs/getting-started/step-by-step-guide/
 */




const RelayDemoRepositoryInfoQuery = graphql`
  query RelayDemoRepositoryInfoQuery {
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



console.warn('__RelayDemoRepositoryInfoQuery', RelayDemoRepositoryInfoQuery);
window.__RelayDemoRepositoryInfoQuery = RelayDemoRepositoryInfoQuery;




export function RelayDemo(props){

  const { preloadedQuery } = props;

  const dataPreload = usePreloadedQuery(AppRepositoryInfoQuery, preloadedQuery);
  const dataLazyLoad = useLazyLoadQuery(RelayDemoRepositoryInfoQuery);

  // const [graphQLData, setGraphQLData] = useState(null);
  // useEffect(() => {
  //   fetchGraphQL(RelayDemoRepositoryInfoQuery, null, true).then(data => {
  //     console.error('__data', data);
  //     setGraphQLData(data);
  //   });
  // }, []);

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
