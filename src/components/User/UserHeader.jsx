import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { AuthUserContext } from '../../context/AuthUserContext.js';
import { AuthRequiredLink } from '../Auth/AuthRequiredLink.jsx';
import { UI } from '../UI/UI.js';
import './UserHeader.scss';

import avatarSrc from '../../assets/images/user-avatar.png'; // TODO: replace with real avatar once backend implemented


export function UserHeader({ className }){
  const { user, logOut } = useContext(AuthUserContext);

  return (
    <div className={cn({
      'UserHeader': true,
      [className]: Boolean(className),
    })}>

      <AuthRequiredLink className="UserHeader__user" to="/profile">
        <img
          className="UserHeader__user-avatar"
          src={avatarSrc}
          alt={user.username}
          width="40"
          height="40"/>
        <div className="UserHeader__user-info">
          {user.username}
          <span className="UserHeader__user-email">{user.email}</span>
        </div>
      </AuthRequiredLink>

      <UI.Dropdown
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

      <UI.Dropdown
        className="UserHeader__notifications"
        classNameList="UserHeader__notifications-list"
        renderTitle={() => (
          <i className={cn({
            'UserHeader__icon': true,
            'UserHeader__notifications-icon': true,
            'UserHeader__notifications-icon--unread': true,
          })}/>
        )}>
        Notifications has&nbsp;not&nbsp;yet&nbsp;been implemented
      </UI.Dropdown>

    </div>
  );
}
