import triageChart from "../../assets/images/profile/donut-chart.png";

const ProfileTriageHeader = () => (
  <div className="Profile__triage-header d-flex">
    <h3 className="Profile__label Profile__label--side flex-grow-1">
      Triage Accuracy
    </h3>
    <div className="Profile__chart">
      <img src={triageChart} />
    </div>
  </div>
);
const ProfileTriageItem = ({ variant, label, percent, num }) => (
  <div className="Profile__triage-item">
    <h4 className="Profile__side-label Profile__side-label--triage d-flex align-items-center justify-content-between">
      {label}
      <span className="Profile__side-percent">
        {percent}% <span>({num})</span>
      </span>
    </h4>
    <div className="Profile__triage-line">
      <div
        className={`Profile__triage-fill Profile__triage-fill--${variant}`}
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  </div>
);
const ProfileTriageItems = () => (
  <>
    <ProfileTriageItem
      variant="1"
      label="Dual-Confirmed Reports"
      num={1359}
      percent={93}
    />
    <ProfileTriageItem
      variant="2"
      label="Triager-Confirmed, Organization-Rejected"
      num={58}
      percent={4}
    />
    <ProfileTriageItem
      variant="3"
      label="Triager-Rejected, Organization-Confirmed"
      num={44}
      percent={3}
    />
  </>
);
const ProfileTriageBox = () => (
  <div className="Profile__side-item">
    <ProfileTriageHeader />
    <ProfileTriageItems />
  </div>
);

export default ProfileTriageBox;
