import React from "react";
import IconSvg from "./IconSvg";

export default function EditorReports() {
  return (
    <div className="Editor-reports">
      <div className="Editor-reports__header d-flex">
        <div className="Editor-reports__tabs d-flex">
          <div className="Editor-reports__tab Editor-reports__tab--active d-flex align-items-center justify-content-center">
            Write
          </div>
          <div className="Editor-reports__tab d-flex align-items-center justify-content-center">
            Preview
          </div>
        </div>
        <div className="Editor-reports__tools d-flex align-items-center flex-grow-1 justify-content-end">
          <div className="Editor-reports__tool">
            <IconSvg name="h1" />
          </div>
          <div className="Editor-reports__tool Editor-reports__tool--selected">
            <IconSvg name="h2" />
          </div>
          <div className="Editor-reports__tool">
            <IconSvg name="bold" />
          </div>
          <div className="Editor-reports__tool">
            <IconSvg name="italic" />
          </div>
          <div className="Editor-reports__tool">
            <IconSvg name="code" />
          </div>
          <div className="Editor-reports__tool">
            <IconSvg name="ancor" />
          </div>
          <div className="Editor-reports__tool">
            <IconSvg name="ordered-list" />
          </div>
          <div className="Editor-reports__tool">
            <IconSvg name="bullet-list" />
          </div>
          <div className="Editor-reports__tool">
            <IconSvg name="quote" />
          </div>
          <div className="Editor-reports__divider"></div>
          <div className="Editor-reports__tool">
            <IconSvg name="question" />
          </div>
        </div>
      </div>
      <div className="Editor-reports__body">
        <textarea
          placeholder="White a message"
          className="Editor-reports__text"
        ></textarea>
        <div className="Editor-reports__actions d-flex">
          <label className="Editor-reports__file flex-grow-1 d-flex align-items-center justify-content-center">
            <IconSvg name="upload" />
            <span>
              {
                "Attach files by dragging & dropping, selecting or pasting them (jpg/png/txt/pdf, max size 100 MB)"
              }
            </span>
            <input type="file" />
          </label>

          <button className="Editor-reports__send">
            <IconSvg name="send" />
          </button>
        </div>
      </div>
    </div>
  );
}
