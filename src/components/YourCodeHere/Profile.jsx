import Banner from "./ProfileBanner";
import Left from "./ProfileContent";
import Side from "./ProfileSide";
import { ProfileActivity } from "./ProfileContent";

export default function Profile() {
  return (
    <div className="Profile w-100">
      <Banner />
      <div className="Global__app-content-max-width">
        <div className="Profile__wrap d-flex">
          <Left />
          <Side />
        </div>
        <ProfileActivity />
      </div>
    </div>
  );
}
