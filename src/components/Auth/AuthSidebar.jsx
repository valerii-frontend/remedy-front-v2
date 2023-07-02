import React, { useContext, useEffect } from 'react';
import cn from 'classnames';
import { AuthSidebarContext } from '../../context/AuthSidebarContext.js';
import { AuthForm } from './AuthForm.jsx';
import './AuthSidebar.scss';


export function AuthSidebar(){
  const { isAuthSidebarOpen, closeAuthSidebar } = useContext(AuthSidebarContext);

  useEffect(() => {
    const onEscKeyPress = (e) => {
      if (e.key === 'Escape') {
        closeAuthSidebar();
      }
    };

    document.addEventListener('keydown', onEscKeyPress);
    return () => {
      document.removeEventListener('keydown', onEscKeyPress);
    };
  }, []);

  return (
    <div className={cn({
      'AuthSidebar': true,
      'AuthSidebar--open': isAuthSidebarOpen,
    })}>
      <i className="AuthSidebar__backdrop" onClick={closeAuthSidebar}/>
      <div className="AuthSidebar__panel">
        <i className="AuthSidebar__close" onClick={closeAuthSidebar}/>
        <AuthForm/>
      </div>
    </div>
  );
}
