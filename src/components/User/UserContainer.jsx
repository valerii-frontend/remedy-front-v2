import React from 'react';
import { UserHeader } from './UserHeader.jsx';
import { UserSidebarNav } from './UserSidebarNav.jsx';
import './UserContainer.scss';


export function UserContainer({ children }){
  return (
    <div className="UserContainer">
      <UserSidebarNav className="UserContainer__sidebar"/>

      <div className="UserContainer__main">
        <UserHeader className="UserContainer__header"/>
        {children}
      </div>
    </div>
  );
}
