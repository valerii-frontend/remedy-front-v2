import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthIsSidebarOpenContext } from '../../context/AuthContext.js';
import { auth } from '../../services/auth.js';
import './Home.scss';


export function Home(){
  // const location = useLocation();
  // const { setIsAuthSidebarOpen } = useContext(AuthIsSidebarOpenContext);
  //
  // useEffect(() => {
  //   auth.getCurrentUser().then((currentUser) => {
  //     if (location.state?.isAuthSidebarOpen && !currentUser) {
  //       setIsAuthSidebarOpen(true);
  //     }
  //   });
  // }, [location]);

  return (
    <h1 className="Home">Home</h1>
  );
}
