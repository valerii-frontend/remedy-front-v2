import Avatar from "./Avatar";
import IconSvg from "./IconSvg";

export default function ThreadReports() {
  return (
    <div className="Thread-reports flex-grow-1">
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
      <div className="Thread-reports__log d-flex flex-column justify-content-end">
        <div className="Thread-reports__date">21 Feb 2023</div>
        <div className="Thread-reports__message Thread-reports__message--view">
          <div className="d-flex">
            <Avatar name="John" />
            <div className="flex-grow-1">
              <div className="Thread-reports__message-header">
                <span className="Thread-reports__message-username">
                  username#3456
                </span>
                <span className="Thread-reports__message-date">12:00</span>
              </div>
              <div className="Thread-reports__message-text">
                submitted a report
                <span>{"‘The most sophisticated title’"}</span>
              </div>
              <button className="Thread-reports__message-btn UIButton UIButton--green UIButton--sm d-flex align-items-center">
                <IconSvg name="doc" />
                View Report
              </button>
            </div>
          </div>
        </div>
        <div className="Thread-reports__date">23 Feb 2023</div>
        <div className="Thread-reports__new d-flex justify-content-end align-items-center">
          New
        </div>
        <div className="Thread-reports__message">
          <div className="d-flex">
            <Avatar name="Tom" />
            <div className="flex-grow-1">
              <div className="Thread-reports__message-header Thread-reports__message-header--new">
                <span className="Thread-reports__message-username">
                  username#3q6
                </span>
                <span className="Thread-reports__message-date">12:00</span>
              </div>
              <div className="Thread-reports__message-text">
                was assigned to this report
              </div>
            </div>
          </div>
        </div>
        <div className="Thread-reports__message">
          <div className="d-flex">
            <Avatar name="Tom" />
            <div className="flex-grow-1">
              <div className="Thread-reports__message-header Thread-reports__message-header--new">
                <span className="Thread-reports__message-username">
                  username#3q6
                </span>
                <span className="Thread-reports__message-date">16:00</span>
              </div>
              <div className="Thread-reports__message-text">
                confirmed the report as
                <span>Valid</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
