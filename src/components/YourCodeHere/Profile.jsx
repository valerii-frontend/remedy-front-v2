import { useEffect } from "react";

import Banner from "./ProfileBanner";
import Content from "./ProfileContent";
import Side from "./ProfileSide";
import Activity from "./ProfileActivity";
import IconSvg from "./IconSvg";

// GLOBAL PROFILE BLOCKS
export const ProfileSubtitle = ({ children }) => (
  <h3 className="Profile__subtitle">{children}</h3>
);
export const ProfileListItem = ({ title, link, date }) => (
  <div className="Profile__list-item position-relative">
    <div className="Profile__list-title d-flex align-items-center position-relative">
      {title}
      {link && (
        <a href={link} className="Profile__list-link">
          <IconSvg name="angle-arrow" />
        </a>
      )}
    </div>
    <div className="Profile__list-date">{date}</div>
  </div>
);

export const ProfileSeeAll = ({ children }) => (
  <div className="Profile__link d-flex align-items-center justify-content-center">
    {children}
  </div>
);

export default function Profile({ isModal }) {
  useEffect(() => {
    if (!isModal) {
      return null;
    }
    document.body.classList.add("Global__no-scroll");
    return () => document.body.classList.remove("Global__no-scroll");
  }, []);
  return (
    <div className="Profile w-100 position-relative">
      {isModal && (
        <div className="Profile__square-btn Profile__square-btn--close d-flex align-items-center justify-content-center position-absolute">
          <IconSvg name="close" />
        </div>
      )}
      <Banner isModal={isModal} />
      <div className="Global__app-content-max-width">
        <div className="Profile__wrap d-flex">
          <Content isModal={isModal} />
          <Side />
        </div>
        <Activity />
      </div>
    </div>
  );
}
