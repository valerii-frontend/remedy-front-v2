import React from 'react';
import { Link } from 'react-router-dom';
import { AuthRequiredLink } from '../Auth/AuthRequiredLink.jsx';
import { UserHeader } from './/UserHeader.jsx';
import './UserContainer.scss';

import logoSrc from '../../assets/images/logo.svg';

export function UserContainer({ children }){
  return (
    <div className="UserContainer">
      <div className="UserContainer__nav">
        <div className="UserContainer__nav-inner">
          <Link className="UserContainer__nav-logo" to="/">
            <img className="UserContainer__nav-logo-img" src={logoSrc} alt="Remedy" width="147" height="28"/>
          </Link>

          <ul className="UserContainer__nav-menu">
            <li>
              <AuthRequiredLink className="UserContainer__nav-menu-link UserContainer__nav-menu-link--profile" to="/profile">
                Profile
              </AuthRequiredLink>
            </li>
            <li>
              <AuthRequiredLink className="UserContainer__nav-menu-link UserContainer__nav-menu-link--reports" to="/reports">
                Reports
              </AuthRequiredLink>
            </li>
            <li>
              <AuthRequiredLink className="UserContainer__nav-menu-link UserContainer__nav-menu-link--programs" to="/programs">
                Program List
              </AuthRequiredLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="UserContainer__main">
        <UserHeader className="UserContainer__header"/>
        {children}
      </div>
    </div>
  );
}
