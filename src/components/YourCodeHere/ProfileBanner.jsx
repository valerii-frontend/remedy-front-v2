import bannerImg from "../../assets/images/profile/banner.png";
import IconSvg from "./IconSvg";

const ProfileBanner = ({ isModal }) => {
  return (
    <div className="Profile__banner position-relative d-flex align-items-end justify-content-end">
      <img
        src={bannerImg}
        alt="user banner"
        className="position-absolute top-0 start-0 w-100 h-100"
      />

      {!isModal && (
        <div className="Profile__edit-cover d-flex align-items-center justify-content-center">
          <IconSvg name={"picture"} /> <span>Edit cover photo</span>
        </div>
      )}
    </div>
  );
};

export default ProfileBanner;
