import { ProfileListItem, ProfileSubtitle } from "./Profile";

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

export default ProfileEducation;
