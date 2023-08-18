import { useState } from "react";
import { UserContainer } from "../User/UserContainer.jsx";

import SidebarReports from "./SidebarReports.jsx";
import ThreadReports from "./ThreadReports.jsx";

import "./YourCodeHere.scss";

export function YourCodeHere() {
  const [modal, setModal] = useState(false);

  return (
    <UserContainer>
      <div className="Reports">
        <h1 className="Reports__title">
          My Reports /The most sophisticated title
        </h1>
        <div className="Reports__wrapper">
          <ThreadReports />
          <SidebarReports />
        </div>
      </div>
    </UserContainer>
  );
}
