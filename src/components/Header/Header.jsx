import React, { useContext } from 'react';
import { AuthUserContext } from '../../context/AuthUserContext.js';
import { AuthSidebarContext } from '../../context/AuthSidebarContext.js';
import './Header.scss';


export function Header(){
  const { user, logOut } = useContext(AuthUserContext);
  const { openAuthSidebar } = useContext(AuthSidebarContext);

  return (
    <div className="Header">
      <h1>Header</h1>

      {user && (
        <div>
          Logged in: {user.username}, {user.role} ({user.email})
          <button onClick={logOut}>Log Out</button>
        </div>
      )}

      {!user && (
        <div>
          Not logged in
          <button onClick={openAuthSidebar}>Log In</button>
        </div>
      )}

    </div>
  );
}
