import IconSvg from "./IconSvg";
import avatarImg from "../../assets/images/user-avatar.png";
import companyImg from "../../assets/images/avatar-company.png";

export default function ReportsModal({ close }) {
  return (
    <div className="ReportsModal">
      <div className="ReportsModal__overlay" onClick={close}></div>
      <div className="ReportsModal__body">
        <div
          className="ReportsModal__close d-flex align-items-center justify-content-center"
          onClick={close}
        >
          <IconSvg name="close" />
        </div>
        <div className="ReportsModal__subtitle">Report preview</div>
        <div className="ReportsModal__header d-flex justify-content-between">
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
              <div className="ReportsModal__title">
                The most sophisticated title
              </div>
              <div className="ReportsModal__name">
                username#3456 <span>for</span> Optimism
              </div>
            </div>
          </div>
          <div className="ReportsModal__actions">
            <button className="UIButton UIButton--green-outline">
              Review Later
            </button>
            <button className="UIButton UIButton--green">
              Start Reviewing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
