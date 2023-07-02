import React from 'react';
import { Link } from 'react-router-dom';
import { AuthRequiredLink } from '../Auth/AuthRequiredLink.jsx';
import './MenuSidebar.scss';


import logoSrc from '../../assets/images/logo.svg';


export function MenuSidebar(){
  return (
    <div className="MenuSidebar">
      <Link className="MenuSidebar__logo" to="/">
        <img className="MenuSidebar__logo-img" src={logoSrc} alt="Remedy" width="140" height="38"/>
      </Link>

      <ul className="MenuSidebar__nav">
        <li>
          <AuthRequiredLink className="MenuSidebar__nav-link MenuSidebar__nav-link--profile" to="/profile">
            Profile
          </AuthRequiredLink>
        </li>
        <li>
          <AuthRequiredLink className="MenuSidebar__nav-link MenuSidebar__nav-link--reports" to="/reports">
            Reports
          </AuthRequiredLink>
        </li>
        <li>
          <AuthRequiredLink className="MenuSidebar__nav-link MenuSidebar__nav-link--programs" to="/programs">
            Program List
          </AuthRequiredLink>
        </li>
      </ul>

      <pre hidden>
        Debug:
        <ul className="MenuSidebar__nav">
          <li>
            <Link to="/">Home link</Link>
          </li>
          <li>
            <Link to="/home2">Home2 link</Link>
          </li>
        </ul>
      </pre>

    </div>
  );
}
