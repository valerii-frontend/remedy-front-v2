import React from 'react';
import { useLocation } from 'react-router-dom';
import { __DebugRouter } from '../__DebugRouter.jsx';


export function Page404(){
  const location = useLocation();

  return (
    <div className="p-5 m-5">
      <div className="display-5 mb-2">
        <code>{location.pathname}</code> not found or has not been implemented
      </div>
      <__DebugRouter/>
    </div>
  );
}
