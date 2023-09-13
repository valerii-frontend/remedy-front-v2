import IconSvg from "./IconSvg";

const ProfileCounter = ({ number, children, isYears }) => (
  <div className="Profile__counter">
    <div className="Profile__counter-number">
      {isYears && <span>{"<"}</span>}
      {number}
    </div>
    <div className="Profile__counter-text d-flex align-items-center">
      {children}
    </div>
  </div>
);
const ProfileCounters = () => (
  <div className="Profile__counters d-flex justify-content-between">
    <ProfileCounter isYears number={17}>
      Years Experience
    </ProfileCounter>
    <ProfileCounter number={"93,773"}>Reports triaged</ProfileCounter>
    <ProfileCounter number={773}>Programs triaged</ProfileCounter>
    <ProfileCounter number={17}>
      Rejected Reports <IconSvg name="info" />
    </ProfileCounter>
    <ProfileCounter number={"6,274"}>
      Closed Reports <IconSvg name="info" />
    </ProfileCounter>
  </div>
);

export default ProfileCounters;
