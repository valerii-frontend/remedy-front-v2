import React from 'react';
import { useParams } from 'react-router-dom';
import { UserContainer } from '../User/UserContainer.jsx';
import { __DebugRouter } from '../__DebugRouter.jsx';
import './ReportNew.scss'


export function ReportNew(){
  const { programId } = useParams();
  return (
    <UserContainer>
      <div className="ReportNew p-5">
        <h1>Submit Bug to {programId}</h1>
        <__DebugRouter/>
      </div>
    </UserContainer>
  );
}
