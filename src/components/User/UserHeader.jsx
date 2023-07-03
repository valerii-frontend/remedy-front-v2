import React, { useContext } from 'react';
import { AuthUserContext } from '../../context/AuthUserContext.js';
import { AuthRequiredLink } from '../Auth/AuthRequiredLink.jsx';
import { UIDropdown } from '../UI/UIDropdown.jsx';
import './UserHeader.scss';


export function UserHeader(){
  const { user, logOut } = useContext(AuthUserContext);

  return (
    <div className="UserHeader">

      <AuthRequiredLink className="" to="/profile">
        <img
          className=""
          src={user.avatar}
          alt={user.username}
          width="40"
          height="40"/>
        {user.username}
        <span>{user.email}</span>
      </AuthRequiredLink>

      <UIDropdown
        classNameButton="btn btn-primary"
        classNameList=""
        title="Settings"
        items={[
          { title: 'Settings', linkTo: '/settings' },
          { title: 'KYC', linkTo: '/kyc' },
          { title: 'Log Out', onClick: logOut },
        ]}/>

      <span>Help</span>

      <div className="UserHeader__search">
        <input className="UserHeader__search-input"
          placeholder="Search for bounty programs and reports"
          type="search"/>
      </div>

      <UIDropdown
        classNameButton="btn btn-primary"
        classNameList=""
        title="Notifications">
        Notifications menu has not yet been implemented
      </UIDropdown>

    </div>
  );
}
