import React from 'react';
import { Link } from 'react-router-dom';
import { AuthRequiredLink } from '../Auth/AuthRequiredLink.jsx';
import './MenuSidebar.scss';


import logoSrc from '../../assets/images/logo.svg';


export function MenuSidebar(){
  return (
    <div className="Sidebar">
      <Link to="/">
        <img src={logoSrc} alt="Remedy" width="140" height="38"/>
      </Link>

      <ul className="Sidebar__nav">
        <li className="Sidebar__nav-item Sidebar__nav-item--profile">
          <AuthRequiredLink to="/profile">Profile</AuthRequiredLink>
        </li>
        <li className="Sidebar__nav-item Sidebar__nav-item--reports">
          <AuthRequiredLink to="/reports">Reports</AuthRequiredLink>
        </li>
        <li className="Sidebar__nav-item Sidebar__nav-item--programs">
          <AuthRequiredLink to="/programs">Program List</AuthRequiredLink>
        </li>
      </ul>

      <pre>
        Debug:
        <ul className="Sidebar__nav">
          <li className="Sidebar__nav-item">
            <Link to="/">Home link</Link>
          </li>
          <li className="Sidebar__nav-item">
            <Link to="/home2">Home2 link</Link>
          </li>
        </ul>
      </pre>

    </div>
  );
}
