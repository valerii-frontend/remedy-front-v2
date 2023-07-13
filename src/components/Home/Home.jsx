import React, { Fragment, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthUserContext } from '../../context/AuthUserContext.js';
import { AuthSidebarContext } from '../../context/AuthSidebarContext.js';
import { AuthRequiredLink } from '../Auth/AuthRequiredLink.jsx';
import './Home.scss';


export function Home(){
  const { user, logOut } = useContext(AuthUserContext);
  const { openAuthSidebar } = useContext(AuthSidebarContext);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.isAuthSidebarOpen) {
      openAuthSidebar();
    }
  }, [location]);

  return (
    <div className="Home">
      <h1 className="display-1 mb-4 text-success">Home</h1>

      <div className="p-3 rounded-3 border">
        {user && (
          <Fragment>
            Logged in: {user.username}, {user.role} ({user.email})
            <button className="ms-3 btn btn-danger" onClick={logOut}>Log Out</button>
          </Fragment>
        )}

        {!user && (
          <Fragment>
            Not logged in
            <button className="ms-3 btn btn-primary" onClick={openAuthSidebar}>Log In</button>
          </Fragment>
        )}
      </div>

      <button className="mt-5 btn btn-primary" onClick={openAuthSidebar}>Open Auth Sidebar</button>

      <div className="mt-4 pt-2">
        No authorization:
        <ul className="mb-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>

        Requires authorization:
        <ul className="mb-4">
          <li>
            <AuthRequiredLink to="/profile">
              Profile
            </AuthRequiredLink>
          </li>
          <li>
            <AuthRequiredLink to="/reports">
              Reports
            </AuthRequiredLink>
          </li>
          <li>
            <AuthRequiredLink to="/programs">
              Program List
            </AuthRequiredLink>
          </li>
        </ul>

        UI Elements:
        <ul className="mb-4">
          <li>
            <Link to="/ui">UI Style Guide</Link>
          </li>
        </ul>

      </div>
    </div>
  );
}
