import React from 'react';
import { Link } from 'react-router-dom';
import { AuthRequiredLink } from '../Auth/AuthRequiredLink.jsx';
import './UserSidebarNav.scss';


import logoSrc from '../../assets/images/logo.svg';


export function UserSidebarNav(){
  return (
    <div className="UserSidebarNav">
      <Link className="UserSidebarNav__logo" to="/">
        <img className="UserSidebarNav__logo-img" src={logoSrc} alt="Remedy" width="140" height="38"/>
      </Link>

      <ul className="UserSidebarNav__menu">
        <li>
          <AuthRequiredLink className="UserSidebarNav__menu-link UserSidebarNav__menu-link--profile" to="/profile">
            Profile
          </AuthRequiredLink>
        </li>
        <li>
          <AuthRequiredLink className="UserSidebarNav__menu-link UserSidebarNav__menu-link--reports" to="/reports">
            Reports
          </AuthRequiredLink>
        </li>
        <li>
          <AuthRequiredLink className="UserSidebarNav__menu-link UserSidebarNav__menu-link--programs" to="/programs">
            Program List
          </AuthRequiredLink>
        </li>
      </ul>

      {/*TODO: remove*/}
      <pre hidden>
        Debug:
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
      </pre>

    </div>
  );
}
