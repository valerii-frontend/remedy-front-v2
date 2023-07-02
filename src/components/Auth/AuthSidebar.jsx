import React, { useContext, useEffect } from 'react';
import cn from 'classnames';
import { AuthIsSidebarOpenContext } from '../../context/AuthContext.js';
import { AuthForm } from './AuthForm.jsx';
import './AuthSidebar.scss';


export function AuthSidebar(){
  const { isAuthSidebarOpen, setIsAuthSidebarOpen } = useContext(AuthIsSidebarOpenContext);

  useEffect(() => {
    const onEscKeyPress = (e) => {
      if (e.key === 'Escape') {

        console.warn('__close');

        setIsAuthSidebarOpen(false);
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
      <i className="AuthSidebar__backdrop" onClick={() => setIsAuthSidebarOpen(false)}/>

      <div className="AuthSidebar__panel">
        <i className="AuthSidebar__close" onClick={() => setIsAuthSidebarOpen(false)}/>
        <AuthForm/>
      </div>
    </div>
  );
}
