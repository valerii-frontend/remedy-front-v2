import IconSvg from "./IconSvg";

export default function ThreadReports() {
  return (
    <div className="Thread-reports">
      <div className="Thread-reports__header d-flex justify-content-between">
        <div className="Thread-reports__pin d-flex align-items-center justify-content-center">
          <IconSvg name="pin" />
        </div>
        <div className="Thread-reports__tabs d-flex flex-grow-1">
          <div className="Thread-reports__tab d-flex align-items-center justify-content-center">
            <IconSvg name="doc" /> View Report
          </div>
        </div>
        <div className="Thread-reports__options d-flex align-items-center justify-content-center">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="Thread-reports__dialog">
        <div className="Thread-reports__date">21 Feb 2023</div>
        <div className="Thread-reports__message">
          <div className="d-flex">
            <div className="Avatar"></div>
          </div>
        </div>
        <div className="Thread-reports__date"></div>
        <div className="Thread-reports__message"></div>
        <div className="Thread-reports__message"></div>
      </div>
    </div>
  );
}
