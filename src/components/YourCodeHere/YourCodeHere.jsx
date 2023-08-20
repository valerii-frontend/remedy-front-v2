import { useState } from "react";
import { UserContainer } from "../User/UserContainer.jsx";

import SidebarReports from "./SidebarReports.jsx";
import ThreadReports from "./ThreadReports.jsx";

import "./YourCodeHere.scss";

export function YourCodeHere() {
  return (
    <UserContainer>
      <div className="Reports d-flex flex-column">
        <h1 className="Reports__title">
          My Reports / The most sophisticated title
        </h1>
        <div className="Reports__wrapper d-flex flex-grow-1">
          <ThreadReports />
          <SidebarReports />
        </div>
      </div>
    </UserContainer>
  );
}
