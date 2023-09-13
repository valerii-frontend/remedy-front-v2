import diagram from "../../assets/images/profile/radar.png";

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

export default ProfileDiagramBox;
