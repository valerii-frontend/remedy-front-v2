import avatar1 from "../../assets/images/profile/avatar.png";
import avatar2 from "../../assets/images/profile/avatar2.png";
import IconSvg from "./IconSvg";
import { ProfileSeeAll, ProfileSubtitle } from "./Profile";

// MOCK
const activityItem1 = {
  total: 16,
  items: [
    {
      icon: "drop-critical",
      name: "Critical findings",
      count: 4,
    },
    {
      icon: "drop-high",
      name: "High finding",
      count: 1,
    },
    {
      icon: "drop-medium",
      name: "Medium finding",
      count: 1,
    },
    {
      icon: "drop-low",
      name: "Low findings",
      count: 3,
    },
    {
      icon: "drop-info",
      name: "Information findings",
      count: 7,
    },
  ],
};
const activityItem2 = {
  total: 6,
  items: [
    {
      icon: "drop-critical",
      name: "Critical findings",
      count: 1,
    },
    {
      icon: "drop-low",
      name: "Low findings",
      count: 1,
    },
    {
      icon: "drop-info",
      name: "Information findings",
      count: 2,
    },
  ],
};

const ProfileActivityTabs = () => (
  <div className="Profile__activity-tabs d-flex">
    <div className="Profile__activity-tab Profile__activity-tab--active d-flex align-items-center justify-content-center">
      2023
    </div>
    <div className="Profile__activity-tab">2022</div>
    <div className="Profile__activity-tab flex-grow-1 d-flex justify-content-end">
      <ProfileSeeAll>
        See all <IconSvg name="angle-arrow" />
      </ProfileSeeAll>
    </div>
  </div>
);
const ProfileActivityItemInfo = ({ findings }) => (
  <div className="Profile__activity-info d-flex align-items-center">
    <div className="Profile__activity-total">
      {findings.total} findings total
    </div>
    <div className="Profile__activity-findings d-flex align-items-center">
      {findings.items.map((item) => {
        const { icon, name, count } = item;
        return (
          <span
            className="Profile__activity-type d-flex align-items-center"
            key={JSON.stringify(item)}
          >
            <IconSvg name={icon} /> {count} {name}
          </span>
        );
      })}
    </div>
  </div>
);
const ProfileActivityItem = ({ name, findings, avatar }) => (
  <li className="Profile__activity-item">
    <h3 className="Profile__label Profile__label--activity d-flex align-items-center">
      <img
        src={avatar}
        className="Profile__activity-avatar position-relative"
      />{" "}
      {name} <IconSvg name="angle-arrow" />
    </h3>
    <ProfileActivityItemInfo findings={findings} />
  </li>
);

const ProfileActivityList2 = () => (
  <ul className="Profile__activity-list position-relative">
    <ProfileActivityItem
      name={"Security Audit for Polygon zkEVM"}
      findings={activityItem1}
      avatar={avatar2}
    />
  </ul>
);
const ProfileActivityList = () => (
  <ul className="Profile__activity-list position-relative">
    <ProfileActivityItem
      name={"Security Audit for Polygon zkEVM"}
      findings={activityItem1}
      avatar={avatar2}
    />
    <ProfileActivityItem
      name={"Security Audit for 1inch"}
      findings={activityItem2}
      avatar={avatar1}
    />
  </ul>
);

export const ProfileActivity = () => (
  <div className="Profile__activity">
    <div className="Profile__activity-header">
      <ProfileSubtitle>Activity as Security Expert</ProfileSubtitle>
    </div>
    <ProfileActivityTabs />
    <div className="Profile__activity-content">
      <div className="Profile__activity-month">
        <ProfileSubtitle>{"March 2023"}</ProfileSubtitle>
      </div>
      <ProfileActivityList />
      <div className="Profile__activity-month">
        <ProfileSubtitle>{"March 2023"}</ProfileSubtitle>
      </div>
      <ProfileActivityList2 />
    </div>
  </div>
);

export default ProfileActivity;
