import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthSidebarContext } from '../../context/AuthSidebarContext.js';
import { AuthUserContext } from '../../context/AuthUserContext.js';


export function AuthRequiredRoute({ children }) {
  const { user } = useContext(AuthUserContext);
  const { openAuthSidebar } = useContext(AuthSidebarContext);

  if (!user) {
    requestAnimationFrame(openAuthSidebar);
    return <Navigate to="/"/>;
  }

  return children;
}
