import { ProfileListItem, ProfileSubtitle } from "./Profile";

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

export default ProfileExperience;
