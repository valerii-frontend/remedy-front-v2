import React, { Fragment, useContext } from 'react';
import cn from 'classnames';
import { AuthUserContext } from '../../context/AuthUserContext.js';
import { AuthSidebarContext } from '../../context/AuthSidebarContext.js';
import './AuthForm.scss';


export function AuthForm(){
  const { user, isUserBeingFetched, logIn, logOut } = useContext(AuthUserContext);
  const { closeAuthSidebar } = useContext(AuthSidebarContext);

  function onLogOut(){
    logOut();
    closeAuthSidebar();
  }

  return (
    <div className={cn({
      'AuthForm': true,
      'AuthForm--loading': isUserBeingFetched,
    })}>

      {user && (
        <Fragment>
          Logged in as:<br/>
          <b>{user.username} ({user.role})</b><br/>
          {user.email}<br/>
          <button onClick={onLogOut}>Log Out</button>
        </Fragment>
      )}

      {!user && (
        <Fragment>
          Log in as:<br/>
          <button onClick={() => logIn('hunter')}>Hunter</button><br/>
          <button onClick={() => logIn('organization')}>Organization</button><br/>
          <button onClick={() => logIn('triager')}>Triager</button><br/>
        </Fragment>
      )}
    </div>
  );
}
