import IconSvg from "./IconSvg";
import avatarImg from "../../assets/images/user-avatar.png";
import companyImg from "../../assets/images/avatar-company.png";

const UserAvatar = () => (
  <div className="ReportsModal__user d-flex flex-grow-1">
    <div className="ReportsModal__avatar">
      <div className="ReportsModal__avatar-main">
        <img src={avatarImg} />
      </div>
      <div className="ReportsModal__avatar-company">
        <img src={companyImg} />
      </div>
    </div>
    <div className="ReportsModal__info">
      <div className="ReportsModal__title">The most sophisticated title</div>
      <div className="ReportsModal__name">
        username#3456 <span>for</span> Optimism
      </div>
    </div>
  </div>
);
const ModalActions = () => (
  <div className="ReportsModal__actions">
    <button className="UIButton UIButton--green-outline">Review Later</button>
    <button className="UIButton UIButton--green">Start Reviewing</button>
  </div>
);
const TableRow = ({ title, children }) => (
  <tr>
    <td className="ReportsModal__table-title">{title}</td>
    <td className="ReportsModal__table-content">{children}</td>
  </tr>
);
const BugSummary = () => (
  <div className="Bug-summary">
    <h3 className="Bug-summary__title">Bug Summary</h3>
    <h4 className="Bug-summary__subtitle">
      A clear and concise description of the bug.
    </h4>
    <h3 className="Bug-summary__title">Impact</h3>
    <div className="Bug-summary__code">CODE</div>
  </div>
);
const TableLink = ({ link }) => {
  return (
    <span className="d-inline-flex align-items-center">
      {link}
      <IconSvg name="angle-arrow" />,
    </span>
  );
};
const AssetScreenshot = ({ name, filled }) => {
  let styles =
    "ReportsModal__screenshot d-flex align-items-center justify-content-between";
  let icon = "angle-arrow";
  if (filled) {
    styles += " ReportsModal__screenshot--filled";
    icon = "close";
  }
  return (
    <div className={styles}>
      <span>{name}</span> <IconSvg name={icon} />
    </div>
  );
};
const ModalTable = () => (
  <table className="ReportsModal__table">
    <tbody>
      <TableRow title="Report ID">%RBB9934567%</TableRow>
      <TableRow title="Submission Date">21 Feb 2023</TableRow>
      <TableRow title="Program Name">Most epic contest 2023</TableRow>
      <TableRow title="Asset">
        <TableLink link="Proxy and implementation" />
        <TableLink link="AaveDebtPositionParserType" />
        <TableLink link="AaveDebtPositionParserType" />
      </TableRow>
      <TableRow title="Severity">Critical</TableRow>
      <TableRow title="Report content">
        <BugSummary />
      </TableRow>
      <TableRow title="Additional links">
        <TableLink link="https://www.figma.com/" />
        <TableLink link="https://immunefi.com/.com/" />
        <TableLink link="AaveDebtPositionParserType" />
      </TableRow>
      <TableRow title="Additional links">
        <div className="ReportsModal__screenshots">
          <AssetScreenshot name="F1 screenshot.png" />
          <AssetScreenshot name="F2 screenshot.png" />
          <AssetScreenshot name="F1 screenshot.png" filled />
          <AssetScreenshot name="F2 screenshot.png" />
        </div>
      </TableRow>
    </tbody>
  </table>
);
export default function ReportsModal({ close }) {
  return (
    <div className="ReportsModal">
      <div className="ReportsModal__overlay" onClick={close}>
        <div
          className="ReportsModal__close d-flex align-items-center justify-content-center"
          onClick={close}
        >
          <IconSvg name="close" />
        </div>
      </div>
      <div className="ReportsModal__body position-relative overflow-y-auto">
        <div className="ReportsModal__subtitle">Report preview</div>
        <div className="ReportsModal__header d-flex justify-content-between">
          <UserAvatar />
          <ModalActions />
        </div>
        <ModalTable />
        <div className="ReportsModal__footer d-flex justify-content-end">
          <ModalActions />
        </div>
      </div>
    </div>
  );
}
