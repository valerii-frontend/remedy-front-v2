import { ProfileSubtitle } from "./Profile";

const ProfileAbout = () => {
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

export default ProfileAbout;
