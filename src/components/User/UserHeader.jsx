import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { AuthUserContext } from '../../context/AuthUserContext.js';
import { AuthRequiredLink } from '../Auth/AuthRequiredLink.jsx';
import { UIDropdown } from '../UI/UIDropdown.jsx';
import './UserHeader.scss';


export function UserHeader(){
  const { user, logOut } = useContext(AuthUserContext);

  return (
    <div className="UserHeader">

      <AuthRequiredLink className="UserHeader__user" to="/profile">
        <img
          className="UserHeader__user-avatar"
          src={user.avatar}
          alt={user.username}
          width="40"
          height="40"/>
        <div className="UserHeader__user-info">
          {user.username}
          <span className="UserHeader__user-email">{user.email}</span>
        </div>
      </AuthRequiredLink>

      <UIDropdown
        className="UserHeader__settings"
        renderTitle={() => (
          <i className="UserHeader__settings-icon UserHeader__icon"/>
        )}
        items={[
          { title: 'Settings', linkTo: '/profile/settings' },
          { title: 'KYC', linkTo: '/profile/kyc' },
          { title: 'Log Out', onClick: logOut },
        ]}/>

      <Link className="UserHeader__help-icon UserHeader__icon" to="/help">Help</Link>

      <div className="UserHeader__search">
        <input className="UserHeader__search-input UIInput"
          placeholder="Search for bounty programs and reports"
          type="search"/>
      </div>

      <UIDropdown
        className="UserHeader__notifications"
        classNameList="UserHeader__notifications-list"
        renderTitle={() => (
          <i className={cn({
            'UserHeader__icon': true,
            'UserHeader__notifications-icon': true,
            'UserHeader__notifications-icon--unread': true, // TODO: fix
          })}/>
        )}
      >
        Notifications menu has not yet been implemented
      </UIDropdown>

    </div>
  );
}
