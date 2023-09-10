import { UserContainer } from "../User/UserContainer";
import Profile from "./Profile";
import "./YourCodeHere.scss";

export function YourCodeHere() {
  return (
    <UserContainer>
      <Profile />
      {/* MODAL */}
      {/* <div className="Profile-modal position-fixed w-100 h-100 top-0 start-0">
        <div className="Profile-modal__content position-relative mx-auto">
          <Profile isModal={true} />
        </div>
        <div className="Profile-modal__overlay position-fixed w-100 h-100 top-0 start-0"></div>
      </div> */}
    </UserContainer>
  );
}
