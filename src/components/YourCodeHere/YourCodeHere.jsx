import { UserContainer } from "../User/UserContainer";
import Profile from "./Profile";
import "./YourCodeHere.scss";

export function YourCodeHere() {
  return (
    <UserContainer>
      <div className="Global__app-content-max-width">
        <Profile />
      </div>
    </UserContainer>
  );
}
