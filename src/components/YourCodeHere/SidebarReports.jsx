import ReportsSeverity from "../User/ReportsSeverity";
import ReportsStatuses from "../User/ReportsStatuses";
import Avatar from "./Avatar";
import IconSvg from "./IconSvg";

export default function SidebarReports() {
  return (
    <div className="Sidebar-reports">
      <div className="Sidebar-reports__item">
        <div className="Sidebar-reports__label">Report ID</div>
        <div className="Sidebar-reports__id">%RBB9934567% </div>
      </div>
      <div className="Sidebar-reports__item">
        <div className="Sidebar-reports__label">Submitted</div>
        <div className="Sidebar-reports__date">21 Feb 2023</div>
      </div>
      <div className="Sidebar-reports__item">
        <div className="Sidebar-reports__label">Current Status</div>
        <ReportsStatuses />
      </div>
      <div className="Sidebar-reports__item">
        <div className="Sidebar-reports__label">Severity</div>
        <ReportsSeverity />
      </div>
      <div className="Sidebar-reports__item">
        <div className="Sidebar-reports__label">Program Name</div>
        <div className="Sidebar-reports__link">
          <span>Most epic contest 2023</span>
        </div>
      </div>
      <div className="Sidebar-reports__item">
        <div className="Sidebar-reports__label">Organisation</div>
        <div className="Sidebar-reports__link">
          <span>Optimism</span>
        </div>
      </div>
      <div className="Sidebar-reports__item">
        <div className="Sidebar-reports__label">Asset (50)</div>
        <div className="Sidebar-reports__assets">
          AaveDebtPositionParserType <IconSvg name="angle-arrow" />
        </div>
        <div className="Sidebar-reports__show-all">
          <span>Show all</span>
        </div>
      </div>
      <div className="Sidebar-reports__item">
        <div className="Sidebar-reports__label">Participants</div>
        <div className="Sidebar-reports__participants d-flex">
          <Avatar small name="T" />
          <Avatar small name="O P" />
          <Avatar small name="R" />
        </div>
      </div>
    </div>
  );
}
