import React from 'react';
import { UserContainer } from '../User/UserContainer.jsx';
import './ReportList.scss';
import { UIDropdown } from '../UI/UIDropdown.jsx';


export function ReportList(){
  return (
    <UserContainer>
      <div className="Reports p-5">
        <div className="Global__app-content-max-width">
          <h1>Reports</h1>
        </div>
      </div>
    </UserContainer>
  );
}
