import React from 'react';
import { UserContainer } from '../User/UserContainer.jsx';
import './RelayDemo.scss';

export function RelayDemo(){
  return (
    <UserContainer>
      <div className="RelayDemo p-5">
        <div className="Global__app-content-max-width">
          <h1>Relay Demo</h1>
        </div>
      </div>
    </UserContainer>
  );
}
