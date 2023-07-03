import React from 'react';
import { UserHeader } from './UserHeader.jsx';
import { UserSidebarNav } from './UserSidebarNav.jsx';
import './UserContainer.scss';


export function UserContainer({ children }){
  return (
    <div className="UserContainer">
      <UserHeader/>
      <UserSidebarNav/>

      <div className="UserContainer__main">
        {children}
      </div>
    </div>
  );
}
