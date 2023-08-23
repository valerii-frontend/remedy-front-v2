import React, { useState } from "react";
import { UserContainer } from "../User/UserContainer.jsx";
import avatar1 from "../../assets/images/user-avatar.png";

import "./YourCodeHere.scss";
import IconSvg from "./IconSvg.jsx";

const Badge = () => (
  <div className="d-flex align-items-center justify-content-center Notification__badge">
    99+
  </div>
);
const Header = () => (
  <div className="d-flex align-items-center justify-content-between Notification__header">
    <span className="Notification__header-text ">Notifications</span>
    <span className="Notification__header-text Notification__header-text--green">
      Mark all as read
    </span>
  </div>
);
const Item = () => (
  <div className="Notification__item">
    <div className="d-flex align-items-center justify-content-between Notification__item-header">
      <div className="d-flex Notification__item-user">
        <div className="Notification__item-user-avatar">
          <img src={avatar1} alt="name" />
        </div>
        <div className="Notification__item-user-name">Org username</div>
      </div>
      <div className="d-flex flex-grow-1 justify-content-end">
        <div className="Notification__item-user-role">Organization user</div>
        <div className="d-flex align-items-center justify-content-center Notification__item-checkbox Notification__item-checkbox--unread"></div>
      </div>
    </div>
  </div>
);
export function YourCodeHere() {
  const [showNotification, setShowNotification] = useState(false);
  return (
    <UserContainer>
      <div className="d-flex align-items-center justify-content-center position-relative Notification">
        <div
          className="d-flex align-items-center justify-content-center Notification__btn Notification__btn--unread Notification__btn--filled"
          onClick={() => setShowNotification((p) => !p)}
        >
          <IconSvg name="bell" />
          <Badge />
        </div>
        {showNotification && (
          <div className="Notification__wrapper">
            <Header />
            <Item />
            <Item />
            <Item />
          </div>
        )}
      </div>
    </UserContainer>
  );
}
