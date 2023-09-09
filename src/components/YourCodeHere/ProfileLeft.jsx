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
  <div className="Profile__header position-relative">
    <div className="Profile__header--top d-flex justify-content-between">
      <div className="Profile__header-avatar">
        <img src={photoImg} alt="photo" />
      </div>
      <div className="Profile__header--dropdown d-flex align-items-center justify-content-center ">
        <IconSvg name="dots" />
      </div>
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
const ProfileSubtitle = ({ children, mb }) => (
  <h3
    className={`Profile__text Profile__text--subtitle ${
      mb ? "Profile__text--mb-" + mb : ""
    }`}
  >
    {children}
  </h3>
);
const ProfileDescription = () => {
  return (
    <div className="Profile__description">
      <ProfileSubtitle mb="14">About</ProfileSubtitle>
      <div className="Profile__text">
        Extensive experience in Financial Reporting and Analysis, Donor database
        systems and data warehouse environment, Audits and Reviews,
        Forecasting/Trend Projection, Contract Management, and Investment
        Strategies including risk/return valuation concepts.
      </div>
    </div>
  );
};
const ProfileCounter = ({ number, children, isYears }) => (
  <div className="Profile__counter">
    <div className="Profile__counter-number">
      {isYears && <span>{"<"}</span>}
      {number}
    </div>
    <div className="Profile__counter-text d-flex align-items-center">
      {children}
    </div>
  </div>
);
const ProfileCounters = () => (
  <div className="Profile__counters d-flex justify-content-between">
    <ProfileCounter isYears number={17}>
      Years Experience
    </ProfileCounter>
    <ProfileCounter number={"93,773"}>Reports triaged</ProfileCounter>
    <ProfileCounter number={773}>Programs triaged</ProfileCounter>
    <ProfileCounter number={17}>
      Rejected Reports <IconSvg name="info" />
    </ProfileCounter>
    <ProfileCounter number={"6,274"}>
      Closed Reports <IconSvg name="info" />
    </ProfileCounter>
  </div>
);
const ProfileListItem = ({ title, link, date }) => (
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
const ProfileExpirience = () => (
  <>
    <ProfileSubtitle>Work Experience</ProfileSubtitle>
    <div className="Profile__expirience">
      <ProfileListItem
        title={"Co-Founder, CTO at Hexens"}
        link={"#"}
        date={"Jun 2023 – Present (3 years 8 months)"}
      />
      <ProfileListItem
        title={"Cyber Security Lecturer at Armsec foundation"}
        date={"Jun 2016 – Present (7 years 8 months)"}
      />
      <ProfileListItem
        title={"Chief Technology Officer at 1guard"}
        date={"Sep 2017 – Jan 2021 (3 years 5 months)"}
      />
      <ProfileListItem
        title={"Computer Science Lecturer at Russian - Armenian University"}
        link={"#"}
        date={"Jun 2017 – Jun 2018 (1 year 1 month)"}
      />
      <ProfileListItem
        title={"Penetration Tester at Defence Group"}
        date={"May 2016 – Sep 2017 (1 year 5 months)"}
      />
    </div>
  </>
);
export default function ProfileLeft() {
  return (
    <div className="Profile__content flex-grow-1">
      <ProfileHeader />
      <ProfileDescription />
      <ProfileCounters />
      <ProfileExpirience />
    </div>
  );
}
