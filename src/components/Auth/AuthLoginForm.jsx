import React, { Fragment, useContext } from 'react';
import cn from 'classnames';
import { AuthUserContext } from '../../context/AuthUserContext.js';
import { AuthSidebarContext } from '../../context/AuthSidebarContext.js';
import './AuthLoginForm.scss';


export function AuthLoginForm(){
  const { user, isUserBeingFetched, logIn, logOut } = useContext(AuthUserContext);
  const { closeAuthSidebar } = useContext(AuthSidebarContext);

  function onLogOut(){
    logOut();
    closeAuthSidebar();
  }

  return (
    <div className={cn({
      'AuthLoginForm': true,
      'AuthLoginForm--loading': isUserBeingFetched,
    })}>

      {user && (
        <Fragment>
          Logged in as:<br/>
          <b>{user.username} ({user.role})</b><br/>
          {user.email}<br/>
          <button className="btn btn-danger mt-3" onClick={onLogOut}>Log Out</button>
        </Fragment>
      )}

      {!user && (
        <Fragment>
          Log in as:<br/>
          <button className="btn btn-primary mt-3" onClick={() => logIn('hunter')}>Hunter</button><br/>
          <button className="btn btn-primary mt-3" onClick={() => logIn('organization')}>Organization</button><br/>
          <button className="btn btn-primary mt-3" onClick={() => logIn('triager')}>Triager</button><br/>
        </Fragment>
      )}
    </div>
  );
}
