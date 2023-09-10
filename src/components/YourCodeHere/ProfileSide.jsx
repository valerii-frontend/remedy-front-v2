import diagram from "../../assets/images/profile/radar.png";
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
    <h3 className="Profile__label">Cybersecurity / Smart Contract Auditor</h3>
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
    <h3 className="Profile__label">Achievements</h3>
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

export default function ProfileSide() {
  return (
    <div className="Profile__side">
      <ProfileDiagramBox />
      <ProfileAchievementsBox />
    </div>
  );
}
