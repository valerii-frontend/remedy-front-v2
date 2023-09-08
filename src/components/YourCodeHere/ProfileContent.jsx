import photoImg from "../../assets/images/profile/avatar-photo.png";
import IconSvg from "./IconSvg";

const ProfileHeaderSocialLink = ({ children }) => (
  <a
    href="#"
    className="Profile__header-link d-flex align-items-center justify-content-center "
  >
    {children}
  </a>
);
const ProfileHeaderLinks = () => (
  <div className="Profile__header-links d-flex">
    <button className="UIButton UIButton--green UIButton--sm">
      Edit profile
    </button>
    <ProfileHeaderSocialLink>
      <IconSvg name="telegram-logo" />
    </ProfileHeaderSocialLink>
    <ProfileHeaderSocialLink>
      <IconSvg name="twitter-logo" />
    </ProfileHeaderSocialLink>
    <ProfileHeaderSocialLink>
      <IconSvg name="linkedin-logo" />
    </ProfileHeaderSocialLink>
    <ProfileHeaderSocialLink>
      <IconSvg name="github-logo" />
    </ProfileHeaderSocialLink>
    <ProfileHeaderSocialLink>
      <IconSvg name="facebook-logo" />
    </ProfileHeaderSocialLink>
    <ProfileHeaderSocialLink>
      <IconSvg name="discord-logo" />
    </ProfileHeaderSocialLink>
    <ProfileHeaderSocialLink>
      <IconSvg name="social-link" />
    </ProfileHeaderSocialLink>
  </div>
);
const ProfileHeader = () => (
  <div className="Profile__header">
    <div className="Profile__header-avatar">
      <img src={photoImg} alt="photo" />
    </div>
    <div className="Profile__header-name">
      kemmio <IconSvg name="hexens-logo" />
    </div>
    <div className="Profile__header-contacts">
      email@example.com / Remedy Triager
    </div>
    <ProfileHeaderLinks />
  </div>
);
export default function ProfileContent() {
  return (
    <div className="Profile__content">
      <ProfileHeader />
    </div>
  );
}
