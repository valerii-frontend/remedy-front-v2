import React from 'react';
import { UserContainer } from '../User/UserContainer.jsx';
import './ProgramList.scss';


export function ProgramList(){
  return (
    <UserContainer>
      <div className="ProgramList">
        <div className="Global__app-content-max-width">
          <h1>Program List</h1>
        </div>
      </div>
    </UserContainer>
  );
}
