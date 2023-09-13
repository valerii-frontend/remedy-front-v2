import ProfileHeader from "./ProfileHeader";
import ProfileAbout from "./ProfileAbout";
import ProfileCounters from "./ProfileCounters";
import ProfileEducation from "./ProfileEducation";
import ProfileExperience from "./ProfileExperience";
import ProfilePortfolio from "./ProfilePortfolio";

export default function ProfileContent({ isModal }) {
  return (
    <div className="Profile__content flex-grow-1">
      <ProfileHeader isModal={isModal} />
      <ProfileAbout />
      <ProfileCounters />
      <ProfileExperience />
      <ProfileEducation />
      <ProfilePortfolio />
    </div>
  );
}
