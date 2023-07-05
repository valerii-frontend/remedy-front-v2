import React from 'react';
import { useParams } from 'react-router-dom';
import { UserContainer } from '../User/UserContainer.jsx';
import { __DebugRouter } from '../__DebugRouter.jsx';
import './ProgramDetails.scss'


export function ProgramDetails(){
  const { programId } = useParams();

  return (
    <UserContainer>
      <div className="ProgramDetails p-5">
        <h1>Program Details: {programId}</h1>
        <__DebugRouter/>
      </div>
    </UserContainer>
  );
}
