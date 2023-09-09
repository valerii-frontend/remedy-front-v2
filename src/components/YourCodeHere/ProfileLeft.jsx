import photoImg from "../../assets/images/profile/avatar-photo.png";
import avatar1 from "../../assets/images/profile/avatar.png";
import avatar2 from "../../assets/images/profile/avatar2.png";
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
const ProfileSubtitle = ({ children }) => (
  <h3 className="Profile__subtitle">{children}</h3>
);
const ProfileDescription = () => {
  return (
    <div className="Profile__description">
      <div className="Profile__description-header">
        <ProfileSubtitle>About</ProfileSubtitle>
      </div>
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
const ProfileExperience = () => (
  <div className="Profile__experience">
    <div className="Profile__experience-header">
      <ProfileSubtitle>Work Experience</ProfileSubtitle>
    </div>
    <ul className="Profile__list">
      <ProfileListItem
        title={"Co-Founder, CTO at Hexens"}
        link={"#"}
        date={"Jun 2023 – Present (3 years 8 months)"}
      />
      <ProfileListItem
        title={"Cyber Security Lecturer at Armsec foundation"}
        date={"2016 – Present (7 years 8 months)"}
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
    </ul>
  </div>
);
const ProfileEducation = () => (
  <div className="Profile__education">
    <div className="Profile__education-header">
      <ProfileSubtitle>Education</ProfileSubtitle>
    </div>
    <ul className="Profile__list">
      <ProfileListItem
        title={"Computer Science at Russian - Armenian University"}
        link={"#"}
        date={"Sep 2017– Sep 2018 (1 year 1 month)"}
      />
      <ProfileListItem
        title={"Penetration Tester at Defence Group"}
        date={"May 2016 – Sep 2017 (1 year 5 months)"}
      />
    </ul>
  </div>
);
const ProfileSeeAll = ({ children }) => (
  <div className="Profile__link d-flex align-items-center justify-content-center">
    {children}
  </div>
);
const ProfilePortfolioHeader = () => (
  <div className="Profile__portfolio-header d-flex justify-content-between align-items-center ">
    <ProfileSubtitle>{"Security portfolio (6)"}</ProfileSubtitle>
    <ProfileSeeAll>See all</ProfileSeeAll>
  </div>
);
const ProfilePortfolioItem = ({ title, link, company, date }) => (
  <div className="Profile__portfolio-item d-flex flex-column">
    <div className="Profile__portfolio-item-content flex-grow-1">
      <h4 className="Profile__label d-flex align-items-center">
        {title}
        {link && (
          <a href={link}>
            <IconSvg name="angle-arrow" />
          </a>
        )}
      </h4>
      {company && <div className="Profile__portfolio-company">{company}</div>}
    </div>
    <div className="Profile__portfolio-date">{date}</div>
  </div>
);
const ProfilePortfolioItems = () => (
  <div className="Profile__portfolio-items">
    <ProfilePortfolioItem
      title="Winner of PHDays VII"
      link="#"
      company="HackQuest"
      date="May 2017"
    />
    <ProfilePortfolioItem
      title="Winner of PHDays VII"
      link="#"
      company="HackQuest"
      date="May 2017"
    />
    <ProfilePortfolioItem
      title="Winner of PHDays VII"
      link="#"
      company="HackQuest"
      date="May 2017"
    />
    <ProfilePortfolioItem title="Paradigm CTF – 2nd Place" date="Aug 2022" />
  </div>
);
const ProfilePortfolio = () => (
  <div className="Profile__portfolio">
    <ProfilePortfolioHeader />
    <ProfilePortfolioItems />
  </div>
);
const ProfileActivityTabs = () => (
  <div className="Profile__activity-tabs d-flex">
    <div className="Profile__activity-tab Profile__activity-tab--active d-flex align-items-center justify-content-center">
      2023
    </div>
    <div className="Profile__activity-tab">2022</div>
    <div className="Profile__activity-tab flex-grow-1 d-flex justify-content-end">
      <ProfileSeeAll>
        See all <IconSvg name="angle-arrow" />
      </ProfileSeeAll>
    </div>
  </div>
);
const ProfileActivityItemInfo = ({ findings }) => (
  <div className="Profile__activity-info d-flex align-items-center">
    <div className="Profile__activity-total">
      {findings.total} findings total
    </div>
    <div className="Profile__activity-findings d-flex align-items-center">
      {findings.items.map((item) => {
        const { icon, name, count } = item;
        return (
          <span
            className="Profile__activity-type d-flex align-items-center"
            key={JSON.stringify(item)}
          >
            <IconSvg name={icon} /> {count} {name}
          </span>
        );
      })}
    </div>
  </div>
);
const ProfileActivityItem = ({ name, findings, avatar }) => (
  <li className="Profile__activity-item">
    <h3 className="Profile__label d-flex align-items-center">
      <img
        src={avatar}
        className="Profile__activity-avatar position-relative"
      />{" "}
      {name} <IconSvg name="angle-arrow" />
    </h3>
    <ProfileActivityItemInfo findings={findings} />
  </li>
);
// MOCK
const activityItem1 = {
  total: 16,
  items: [
    {
      icon: "drop-critical",
      name: "Critical findings",
      count: 4,
    },
    {
      icon: "drop-high",
      name: "High finding",
      count: 1,
    },
    {
      icon: "drop-medium",
      name: "Medium finding",
      count: 1,
    },
    {
      icon: "drop-low",
      name: "Low findings",
      count: 3,
    },
    {
      icon: "drop-info",
      name: "Information findings",
      count: 7,
    },
  ],
};
const activityItem2 = {
  total: 6,
  items: [
    {
      icon: "drop-critical",
      name: "Critical findings",
      count: 1,
    },
    {
      icon: "drop-low",
      name: "Low findings",
      count: 1,
    },
    {
      icon: "drop-info",
      name: "Information findings",
      count: 2,
    },
  ],
};
const ProfileActivityList2 = () => (
  <ul className="Profile__activity-list position-relative">
    <ProfileActivityItem
      name={"Security Audit for Polygon zkEVM"}
      findings={activityItem1}
      avatar={avatar2}
    />
  </ul>
);
const ProfileActivityList = () => (
  <ul className="Profile__activity-list position-relative">
    <ProfileActivityItem
      name={"Security Audit for Polygon zkEVM"}
      findings={activityItem1}
      avatar={avatar2}
    />
    <ProfileActivityItem
      name={"Security Audit for 1inch"}
      findings={activityItem2}
      avatar={avatar1}
    />
  </ul>
);
export const ProfileActivity = () => (
  <div className="Profile__activity">
    <div className="Profile__activity-header">
      <ProfileSubtitle>Activity as Security Expert</ProfileSubtitle>
    </div>
    <ProfileActivityTabs />
    <div className="Profile__activity-content">
      <div className="Profile__activity-month">
        <ProfileSubtitle>{"March 2023"}</ProfileSubtitle>
      </div>
      <ProfileActivityList />
      <div className="Profile__activity-month">
        <ProfileSubtitle>{"March 2023"}</ProfileSubtitle>
      </div>
      <ProfileActivityList2 />
    </div>
  </div>
);
export default function ProfileLeft() {
  return (
    <div className="Profile__content flex-grow-1">
      <ProfileHeader />
      <ProfileDescription />
      <ProfileCounters />
      <ProfileExperience />
      <ProfileEducation />
      <ProfilePortfolio />
    </div>
  );
}
