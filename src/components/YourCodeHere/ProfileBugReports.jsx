import bugsChart from "../../assets/images/profile/donut-chart2.png";

const ProfileReportedBugsItem = ({ variant, label, percent, num }) => (
  <li className="Profile__reports-item">
    <h4
      className={`Profile__reports-label Profile__reports-label--${variant} Profile__side-label d-flex align-items-center justify-content-between`}
    >
      {label}
      <span className="Profile__side-percent flex-grow-1 text-end">
        {percent}% <span>({num})</span>
      </span>
    </h4>
  </li>
);
const ProfileReportedBugsList = () => (
  <ul className="Profile__reports-list flex-grow-1">
    <ProfileReportedBugsItem
      variant="critical"
      label="Critical"
      percent={44}
      num={"2,760"}
    />
    <ProfileReportedBugsItem
      variant="high"
      label="High"
      percent={12}
      num={763}
    />
    <ProfileReportedBugsItem
      variant="medium"
      label="Medium"
      percent={16}
      num={"1,004"}
    />
    <ProfileReportedBugsItem
      variant="low"
      label="Low"
      percent={19}
      num={"1,192"}
    />
    <ProfileReportedBugsItem
      variant="info"
      label="Information"
      percent={30}
      num={"1,882"}
    />
    <li className="Profile__reports-item">
      <h4 className="Profile__side-label d-flex align-items-center justify-content-between">
        <span className="Profile__reports-total">Total</span>
        <span className="Profile__reports-total">6,274</span>
      </h4>
    </li>
  </ul>
);
const ProfileReportedBugsBox = () => (
  <div className="Profile__side-item">
    <h3 className="Profile__label Profile__label--reports">
      Reported Bugs Severity
    </h3>
    <div className="Profile__reports d-flex align-items-center">
      <ProfileReportedBugsList />
      <div className="Profile__chart">
        <img src={bugsChart} />
      </div>
    </div>
  </div>
);

export default ProfileReportedBugsBox;
