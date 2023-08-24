import React, { useState } from "react";
import { UserContainer } from "../User/UserContainer.jsx";
import avatar1 from "../../assets/images/user-avatar.png";
import avatar2 from "../../assets/images/avatar.svg";

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
const ItemBody1 = () => (
  <>
    <div className="Notification__item-text">
      started reviewing the{" "}
      <span className="Notification__item-text-white">
        The most sophisticated Hunter report’s title
      </span>
    </div>
  </>
);
const ItemBody2 = () => (
  <>
    <div className="Notification__item-text">
      started reviewing the{" "}
      <span className="Notification__item-text-white">
        You have earned{" "}
        <b className="Notification__item-text-link Notification__item-text-link--white">
          Top Performer{" "}
          <span className="Notification__item-text-tooltip">
            In top 20% by received payouts quantity in September
          </span>
        </b>
        achievement!
      </span>
    </div>
  </>
);
const ItemBody3 = () => (
  <>
    <div className="Notification__item-text">
      <span className="Notification__item-text-white">The </span>
      <b className="Notification__item-text-link">
        Decentralized interoperability network{" "}
        <span className="Notification__item-text-tooltip">
          Lorem ipsum dolor sit amet.
        </span>
      </b>
      <span className="Notification__item-text-white">
        program by <b>Polygon</b> was updated.
      </span>
    </div>
  </>
);
const ItemBody4 = () => (
  <>
    <div className="Notification__item-text">
      The{" "}
      <span className="Notification__item-text-white">
        Decentralized interoperability network{" "}
      </span>{" "}
      by{" "}
      <span className="Notification__item-text-white">
        Super Duper long company name
      </span>{" "}
      was updated.{" "}
      <span className="Notification__item-text-link">Update note</span>
    </div>
  </>
);

const Item = ({ id, children }) => {
  const [checkedInp, setCheckedInp] = useState(true);
  return (
    <div className="Notification__item d-flex flex-column">
      <div className="d-flex align-items-center justify-content-between Notification__item-header">
        <div className="d-flex Notification__item-user">
          <div className="Notification__item-user-avatar">
            <img src={avatar1} alt="name" />
          </div>
          <div className="Notification__item-user-name">Org username</div>
        </div>
        <div className="d-flex flex-grow-1 justify-content-end">
          <div className="Notification__item-user-role">Organization user</div>
          <div className="d-flex align-items-center justify-content-center Notification__item-checkbox Notification__item-checkbox--unread">
            <input
              className="Notification__item-checkbox-input"
              type="checkbox"
              id={id}
              defaultChecked
              value={checkedInp}
              onChange={() => setCheckedInp((p) => !p)}
            />
            <label
              className={`Notification__item-checkbox-label ${
                checkedInp ? "" : "Notification__item-checkbox-label--empty"
              }`}
              htmlFor={id}
            >
              <span className="Notification__item-checkbox-tooltip">
                Mark as {checkedInp ? "read" : "unread"}
              </span>
            </label>
          </div>
        </div>
      </div>
      <div className="Notification__item-body flex-grow-1">{children}</div>
      <div className="Notification__item-footer d-flex justify-content-between">
        <div className="Notification__item-footer-event d-flex">
          <div className="Notification__item-footer-avatar">
            <img src={avatar2} alt="test" />
          </div>
          <div className="Notification__item-footer-text">
            Decentralized interoperability network
          </div>
        </div>
        <div className="Notification__item-footer-date">Jul 29 09:00</div>
      </div>
    </div>
  );
};
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
            <Item id={1}>
              <ItemBody1 />
            </Item>
            <Item id={2}>
              <ItemBody2 />
            </Item>
            <Item id={3}>
              <ItemBody3 />
            </Item>
            <Item id={4}>
              <ItemBody4 />
            </Item>
          </div>
        )}
      </div>
    </UserContainer>
  );
}
