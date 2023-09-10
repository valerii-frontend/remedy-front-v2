import Banner from "./ProfileBanner";
import Left from "./ProfileContent";
import Side from "./ProfileSide";
import { ProfileActivity } from "./ProfileContent";
import { useEffect } from "react";
import IconSvg from "./IconSvg";

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
          <Left isModal={isModal} />
          <Side />
        </div>
        <ProfileActivity />
      </div>
    </div>
  );
}
