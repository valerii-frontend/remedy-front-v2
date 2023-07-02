import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthIsSidebarOpenContext } from '../../context/AuthContext.js';
import { auth } from '../../services/auth.js';


export function AuthLink({ onClick, children, ...props }){
  const { setIsAuthSidebarOpen } = useContext(AuthIsSidebarOpenContext);

  const onClickCustom = (e) => {
    const isAuthRequired = auth.ROUTES_REQUIRING_AUTH.includes(e.target.pathname);

    if (isAuthRequired && !auth.currentUser) {
      e.preventDefault();
      setIsAuthSidebarOpen(true);
    }

    onClick && onClick(e);
  };

  return (
    <Link onClick={onClickCustom} {...props}>{children}</Link>
  );
}
