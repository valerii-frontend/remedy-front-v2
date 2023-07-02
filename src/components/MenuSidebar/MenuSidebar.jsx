import React from 'react';
import { Link } from 'react-router-dom';
import { AuthLink } from '../AuthLink/AuthLink.jsx';
import './MenuSidebar.scss';

import logoSrc from '../../assets/images/logo.svg';


export function MenuSidebar(){
  return (
    <div className="Sidebar">
      <Link to="/">
        <img src={logoSrc} alt="Remedy" width="140" height="38"/>
      </Link>

      <hr/>

      <ul className="Sidebar__nav">
        <li className="Sidebar__nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="Sidebar__nav-item">
          <Link to="/home2">Home2</Link>
        </li>
      </ul>

      <hr/>

      <ul className="Sidebar__nav">
        <li className="Sidebar__nav-item Sidebar__nav-item--profile">
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/reports">Reports</Link>
        </li>
        <li>
          <Link to="/programs">Program List</Link>
        </li>
      </ul>
    </div>
  );
}
