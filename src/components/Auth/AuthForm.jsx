import React, { Fragment, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';
import { AuthCurrentUserContext } from '../../context/AuthContext.js';
import { auth } from '../../services/auth.js';
import './AuthForm.scss';


export function AuthForm({ className }){
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(AuthCurrentUserContext);

  useEffect(() => {
    setIsLoading(true);
    auth.getCurrentUser().then(user => {
      setCurrentUser(user);
      setIsLoading(false);
    });
  }, []);

  function onLogIn(role){
    setIsLoading(true);
    auth.logIn(role).then(user => {
      setCurrentUser(user);
      setIsLoading(false);
    });
  }

  function onLogOut(){
    setCurrentUser(null);
    navigate('/');
    auth.logOut();
  }

  return (
    <div className={cn({
      'AuthForm': true,
      'AuthForm--loading': isLoading,
      [className]: Boolean(className),
    })}>

      {currentUser && (
        <Fragment>
          Logged in as:<br/>
          <b>{currentUser.username} ({currentUser.role})</b><br/>
          {currentUser.email}<br/>
          <button onClick={onLogOut}>Log Out</button>
        </Fragment>
      )}

      {!currentUser && (
        <Fragment>
          Log in as:<br/>
          <button onClick={() => onLogIn('hunter')}>Hunter</button><br/>
          <button onClick={() => onLogIn('organization')}>Organization</button><br/>
          <button onClick={() => onLogIn('triager')}>Triager</button><br/>
        </Fragment>
      )}
    </div>
  );
}
