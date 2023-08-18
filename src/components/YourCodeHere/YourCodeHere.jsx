import { useState } from "react";
import { UserContainer } from "../User/UserContainer.jsx";

import docIcon from "../../assets/images/icon-document.svg";
import docIconDark from "../../assets/images/icon-document-dark.svg";

import "./YourCodeHere.scss";

export function YourCodeHere() {
  const [modal, setModal] = useState(false);

  return (
    <UserContainer>
      <img src={docIcon} />
      <img src={docIconDark} />
    </UserContainer>
  );
}
