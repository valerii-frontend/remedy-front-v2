import { useState } from "react";
import Avatar from "./Avatar";
import EditorReports from "./EditorReports";
import IconSvg from "./IconSvg";
import userImg from "../../assets/images/user-avatar.png";

export default function ThreadReports() {
  const [dropOptions, setDropOptions] = useState(false);
  const [option, setOption] = useState(1);

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
        <div
          className="Thread-reports__options-icon d-flex align-items-center justify-content-center"
          onClick={() => setDropOptions((p) => !p)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        {dropOptions && (
          <ul className="Thread-reports__drop-options">
            <li
              className={`Thread-reports__drop-options-item ${
                option == 1 ? "Thread-reports__drop-options-item--active" : ""
              }`}
              onClick={() => {
                setDropOptions(false);
                setOption(1);
              }}
            >
              Show All Messages
            </li>
            <li
              className={`Thread-reports__drop-options-item ${
                option == 2 ? "Thread-reports__drop-options-item--active" : ""
              }`}
              onClick={() => {
                setDropOptions(false);
                setOption(2);
              }}
            >
              Show only Activity Log
            </li>
          </ul>
        )}
      </div>
      <div className="Thread-reports__body">
        <div className="Thread-reports__log d-flex flex-column justify-content-end">
          <div className="Thread-reports__date">21 Feb 2023</div>
          <div className="Thread-reports__message Thread-reports__message--view">
            <div className="d-flex">
              <Avatar img={userImg} name="u" />
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
        <EditorReports />
      </div>
    </div>
  );
}
