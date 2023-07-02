import React, { useContext, useEffect } from 'react';
import { useMatches } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { AuthIsSidebarOpenContext } from '../../context/AuthContext.js';
import { auth } from '../../services/auth.js';

import './Home2.scss';


export function Home2(){
  // const matches = useMatches();
  // console.log('__Home2 matches', matches);


  // const location = useLocation();
  // const { setIsAuthSidebarOpen } = useContext(AuthIsSidebarOpenContext);

  // useEffect(() => {
  //   auth.getCurrentUser().then((currentUser) => {
  //     if (location.state?.isAuthSidebarOpen && !currentUser) {
  //       setIsAuthSidebarOpen(true);
  //     }
  //   });
  // }, [location]);

  return (
    <h1 className="Home2">Home 2</h1>
  );
}
