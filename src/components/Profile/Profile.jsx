import React from 'react';
import { UserContainer } from '../User/UserContainer.jsx';
import './Profile.scss';


export function Profile(){
  return (
    <UserContainer>
      <div className="Profile">
        <div className="Global__app-content-max-width">
          <h1>Profile</h1>
        </div>
      </div>
    </UserContainer>
  );
}
