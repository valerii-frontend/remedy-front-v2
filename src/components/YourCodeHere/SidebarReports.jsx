import { useState } from "react";
import SeverityDropdown from "./SeverityDropdown";
import StatusesDropdown from "./StatusesDropdown";
import Avatar from "./Avatar";
import IconSvg from "./IconSvg";

const ReportId = () => (
  <div className="Sidebar-reports__item">
    <div className="Sidebar-reports__label">Report ID</div>
    <div className="Sidebar-reports__id">%RBB9934567% </div>
  </div>
);
const ReportDate = () => (
  <div className="Sidebar-reports__item">
    <div className="Sidebar-reports__label">Submitted</div>
    <div className="Sidebar-reports__date">21 Feb 2023</div>
  </div>
);
const ReportStatus = () => (
  <div className="Sidebar-reports__item">
    <div className="Sidebar-reports__label">Current Status</div>
    <StatusesDropdown />
  </div>
);
const ReportName = () => (
  <div className="Sidebar-reports__item">
    <div className="Sidebar-reports__label">Program Name</div>
    <div className="Sidebar-reports__link">
      <span>Most epic contest 2023</span>
    </div>
  </div>
);
const ReportSeverity = () => (
  <div className="Sidebar-reports__item">
    <div className="Sidebar-reports__label">Severity</div>
    <SeverityDropdown />
  </div>
);
const ReportOrganisation = () => (
  <div className="Sidebar-reports__item">
    <div className="Sidebar-reports__label">Organisation</div>
    <div className="Sidebar-reports__link">
      <span>Optimism</span>
    </div>
  </div>
);
const ReportAssets = () => {
  const [showAll, setShowAll] = useState(false);
  return (
    <div className="Sidebar-reports__item">
      <div className="Sidebar-reports__label">Asset (50)</div>
      <div className="Sidebar-reports__assets">
        AaveDebtPositionParserType <IconSvg name="angle-arrow" />
      </div>
      {showAll && (
        <div className="Sidebar-reports__assets Sidebar-reports__assets--hidden">
          {Array.apply(null, { length: 49 }).map((item, index) => {
            return (
              <div className="Sidebar-reports__assets" key={index}>
                {index + 1} Asset <IconSvg name="angle-arrow" />
              </div>
            );
          })}
        </div>
      )}
      <div className="Sidebar-reports__show-all">
        <span onClick={() => setShowAll((p) => !p)}>
          {showAll ? "Hide" : "Show"} all
        </span>
      </div>
    </div>
  );
};
const ReportParticipans = () => (
  <div className="Sidebar-reports__item">
    <div className="Sidebar-reports__label">Participants</div>
    <div className="Sidebar-reports__participants d-flex">
      <Avatar small name="T" />
      <Avatar small name="O P" />
      <Avatar small name="R" />
    </div>
  </div>
);
const SideBarControls = () => (
  <div className="Sidebar-reports__controls">
    <button className="UIButton  UIButton--sm Sidebar-reports__btn">
      Escalate
    </button>
    <button className="UIButton UIButton--sm Sidebar-reports__btn">
      Reject
    </button>
    <button className="UIButton UIButton--green UIButton--sm Sidebar-reports__submit">
      Confirm Submission
    </button>
  </div>
);
export default function SidebarReports() {
  return (
    <div className="Sidebar-reports d-flex flex-column">
      <div className="Sidebar-reports__data flex-grow-1">
        <ReportId />
        <ReportDate />
        <ReportStatus />
        <ReportSeverity />
        <ReportName />
        <ReportOrganisation />
        <ReportAssets />
        <ReportParticipans />
      </div>
      <SideBarControls />
    </div>
  );
}
