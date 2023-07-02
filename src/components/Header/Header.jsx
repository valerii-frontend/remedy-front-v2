import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../services/auth.js';
import { AuthCurrentUserContext } from '../../context/AuthContext.js';
import './Header.scss';


export function Header(){
  const { currentUser, setCurrentUser } = useContext(AuthCurrentUserContext);
  const navigate = useNavigate();

  function onLogOutClick(){
    setCurrentUser(null);
    navigate('/');
    auth.logOut();
  }

  return (
    <div className="Header">
      <h1>Header</h1>

      {currentUser
        ? `Logged in: ${currentUser.username}, ${currentUser.role} (${currentUser.email})`
        : 'Not logged in'
      }

      {currentUser && (
        <button onClick={onLogOutClick}>Log Out</button>
      )}
    </div>
  );
}
