import IconSvg from "./IconSvg";
import { ProfileSeeAll, ProfileSubtitle } from "./Profile";

const ProfilePortfolioHeader = () => (
  <div className="Profile__portfolio-header d-flex justify-content-between align-items-center ">
    <ProfileSubtitle>{"Security portfolio (6)"}</ProfileSubtitle>
    <ProfileSeeAll>See all</ProfileSeeAll>
  </div>
);
const ProfilePortfolioItem = ({ title, link, company, date }) => (
  <div className="Profile__portfolio-item d-flex flex-column">
    <div className="Profile__portfolio-item-content flex-grow-1">
      <h4 className="Profile__label Profile__label--portfolio d-flex align-items-center">
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
export default ProfilePortfolio;
