import React from 'react';
import { useLocation } from 'react-router-dom';
import { UserContainer } from './UserContainer.jsx';


export function __Placeholder(){
  const location = useLocation();

  return (
    <UserContainer>
      <h4 className="Global__app-content-max-width p-4">
        <code>{location.pathname}</code> has not yet been implemented
      </h4>
    </UserContainer>
  );
}
