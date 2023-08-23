import React, { useState } from "react";
import { UserContainer } from "../User/UserContainer.jsx";
import "./YourCodeHere.scss";
import IconSvg from "./IconSvg.jsx";

const Badge = () => (
  <div className="d-flex align-items-center justify-content-center Notification__badge">
    99+
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
            <div className="d-flex align-items-center justify-content-between Notification__header">
              <span className="Notification__header-text ">Notifications</span>
              <span className="Notification__header-text Notification__header-text--green">
                Mark all as read
              </span>
            </div>
          </div>
        )}
      </div>
    </UserContainer>
  );
}
