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
export default function ReportsModal({ close }) {
  return (
    <div className="ReportsModal">
      <div
        className="ReportsModal__close d-flex align-items-center justify-content-center"
        onClick={close}
      >
        <IconSvg name="close" />
      </div>
      <div className="ReportsModal__overlay" onClick={close}></div>
      <div className="ReportsModal__body overflow-y-auto">
        <div className="ReportsModal__subtitle">Report preview</div>
        <div className="ReportsModal__header d-flex justify-content-between">
          <UserAvatar />
          <ModalActions />
        </div>
        <table className="ReportsModal__table">
          <tbody>
            <TableRow title="Report ID">%RBB9934567%</TableRow>
            <TableRow title="Submission Date">21 Feb 2023</TableRow>
            <TableRow title="Program Name">Most epic contest 2023</TableRow>
            <TableRow title="Asset">
              <span>
                Proxy and implementation
                <IconSvg name="angle-arrow" />,
              </span>{" "}
              <span>
                AaveDebtPositionParserType
                <IconSvg name="angle-arrow" />,
              </span>{" "}
              <span>
                AaveDebtPositionParserType
                <IconSvg name="angle-arrow" />
              </span>
            </TableRow>
            <TableRow title="Severity">Critical</TableRow>
            <TableRow title="Report content">
              <BugSummary />
            </TableRow>
            <TableRow title="Additional links">
              <span>
                https://www.figma.com/
                <IconSvg name="angle-arrow" />,
              </span>{" "}
              <span>
                https://immunefi.com/.com/
                <IconSvg name="angle-arrow" />,
              </span>{" "}
              <span>
                AaveDebtPositionParserType
                <IconSvg name="angle-arrow" />
              </span>
            </TableRow>
            <TableRow title="Additional links">
              <div className="ReportsModal__screenshots">
                <div className="ReportsModal__screenshot">
                  F1 screenshot.png
                </div>
                <div className="ReportsModal__screenshot">
                  F2 screenshot.png
                </div>
                <div className="ReportsModal__screenshot">
                  F1 screenshot.png
                </div>
                <div className="ReportsModal__screenshot">
                  F2 screenshot.png
                </div>
              </div>
            </TableRow>
          </tbody>
        </table>
        <div className="ReportsModal__footer d-flex justify-content-end">
          <ModalActions />
        </div>
      </div>
    </div>
  );
}
