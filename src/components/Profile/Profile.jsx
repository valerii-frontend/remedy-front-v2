import React from 'react';
import { UserContainer } from '../User/UserContainer.jsx';
import './Profile.scss';
import { __DebugRouter } from '../__DebugRouter.jsx';


export function Profile(){
  return (
    <UserContainer>
      <div className="Profile p-5">
        <div className="Global__app-content-max-width">
          <h1>Profile</h1>
          <__DebugRouter/>
        </div>
      </div>
    </UserContainer>
  );
}
