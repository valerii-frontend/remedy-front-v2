import React, { useContext } from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import { AuthUserContext } from '../../context/AuthUserContext.js';
import { AuthSidebarContext } from '../../context/AuthSidebarContext.js';


const ROUTES_REQUIRING_AUTH = [
  '/profile',
  '/reports',
  '/programs',
];


export function AuthRequiredLink({ children, className, onClick, ...props }) {
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
    <NavLink
      className={({ isActive }) =>
        isActive
          ? cn(className, 'active')
          : className
      }
      onClick={onClickHandler}
      {...props}>
      {children}
    </NavLink>
  );
}
