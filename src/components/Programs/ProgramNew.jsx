import React from 'react';
import { UserContainer } from '../User/UserContainer.jsx';
import { __DebugRouter } from '../__DebugRouter.jsx';
import './ProgramNew.scss'


export function ProgramNew(){
  return (
    <UserContainer>
      <div className="ProgramNew p-5">
        <h1>Create Program</h1>
        <__DebugRouter/>
      </div>
    </UserContainer>
  );
}
