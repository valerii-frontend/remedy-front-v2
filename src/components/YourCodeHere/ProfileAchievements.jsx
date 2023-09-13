import badge1 from "../../assets/images/profile/badge-1.png";
import badge2 from "../../assets/images/profile/badge-2.png";
import badge3 from "../../assets/images/profile/badge-3.png";
import badge4 from "../../assets/images/profile/badge-4.png";

const badges = [badge1, badge2, badge3, badge4];

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

export default ProfileAchievementsBox;
