import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthUserContext } from '../../context/AuthUserContext.js';
import { AuthSidebarContext } from '../../context/AuthSidebarContext.js';


const ROUTES_REQUIRING_AUTH = [
  '/profile',
  '/reports',
  '/programs',
];


export function AuthRequiredLink({ children, onClick, ...props }) {
  const { user } = useContext(AuthUserContext);
  const { openAuthSidebar } = useContext(AuthSidebarContext);

  function onClickHandler(e){
    const isAuthRequired = ROUTES_REQUIRING_AUTH.find((route) => {
      return e.target.pathname.startsWith(route);
    });

    if (isAuthRequired && !user) {
      e.preventDefault();
      openAuthSidebar();
    }
    else {
      onClick && onClick(e);
    }
  }

  return (
    <Link onClick={onClickHandler} {...props}>{children}</Link>
  );
}
