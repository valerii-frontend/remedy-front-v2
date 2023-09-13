import ProfileAchievementsBox from "./ProfileAchievements";
import ProfileReportedBugsBox from "./ProfileBugReports";
import ProfileDiagramBox from "./ProfileDiagram";
import ProfileTriageBox from "./ProfileTriage";

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
