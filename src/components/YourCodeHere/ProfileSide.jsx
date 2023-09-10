import diagram from "../../assets/images/profile/radar.png";
import triageChart from "../../assets/images/profile/donut-chart.png";
import bugsChart from "../../assets/images/profile/donut-chart2.png";
import badge1 from "../../assets/images/profile/badge-1.png";
import badge2 from "../../assets/images/profile/badge-2.png";
import badge3 from "../../assets/images/profile/badge-3.png";
import badge4 from "../../assets/images/profile/badge-4.png";

const skillsList = [
  "DeFi",
  "Cryptography",
  "Java",
  "Rust",
  "Solidity",
  "GoLang",
  "Network Security",
  "Penetration tester ",
  "C/C++",
  "Zero Knowledge Proofs",
];
const badges = [badge1, badge2, badge3, badge4];

const ProfileDiagramHeader = () => (
  <>
    <h3 className="Profile__label Profile__label--side">
      Cybersecurity / Smart Contract Auditor
    </h3>
    <div className="Profile__diagram">
      <img src={diagram} />
    </div>
  </>
);
const ProfileDiagramSkills = () => (
  <>
    <div className="Profile__side-header d-flex justify-content-between align-items-center">
      <span>Skills</span>
      <span className="Profile__link">+ Add more</span>
    </div>
    <ul className="Profile__side-skills d-flex flex-wrap">
      {skillsList.map((skill) => (
        <li className="Profile__side-skill" key={skill}>
          {skill}
        </li>
      ))}
    </ul>
  </>
);
const ProfileDiagramBox = () => (
  <div className="Profile__side-item">
    <ProfileDiagramHeader />
    <ProfileDiagramSkills />
  </div>
);
const ProfileAchievementsHeader = () => (
  <div className="Profile__achievements-header d-flex justify-content-between align-items-center">
    <h3 className="Profile__label Profile__label--side">Achievements</h3>
    <span className="Profile__link">See All</span>
  </div>
);
const ProfileAchievementsBadges = () => (
  <ul className="Profile__side-badges d-flex align-items-center">
    {badges.map((badge) => (
      <li key={badge} className="Profile__side-badge">
        <img src={badge} />
      </li>
    ))}
  </ul>
);
const ProfileAchievementsBox = () => (
  <div className="Profile__side-item">
    <ProfileAchievementsHeader />
    <ProfileAchievementsBadges />
  </div>
);
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
export default function ProfileSide() {
  return (
    <div className="Profile__side">
      <ProfileDiagramBox />
      <ProfileAchievementsBox />
      <ProfileTriageBox />
      <ProfileReportedBugsBox />
    </div>
  );
}
