import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { AuthUserContext } from '../../context/AuthUserContext.js';
import { AuthSidebarContext } from '../../context/AuthSidebarContext.js';
import { useAuthUser } from '../../hooks/useAuthUser.js';
import { useAuthSidebar } from '../../hooks/useAuthSidebar.js';

import { LoadingIndicator } from '../LoadingIndicator/LoadingIndicator.jsx';
import { AuthRequiredRoute } from '../Auth/AuthRequiredRoute.jsx';
import { Header } from '../Header/Header.jsx';
import { AuthSidebar } from '../Auth/AuthSidebar.jsx';
import { MenuSidebar } from '../MenuSidebar/MenuSidebar.jsx';
import { Home } from '../Home/Home.jsx';
import { Home2 } from '../Home2/Home2.jsx';
import { Profile } from '../Profile/Profile.jsx';
import { Reports } from '../Reports/Reports.jsx';
import { ProgramList } from '../ProgramList/ProgramList.jsx';
import './App.scss';


export function App(){
  const { user, isUserBeingFetched, logIn, logOut } = useAuthUser();
  const { isAuthSidebarOpen, openAuthSidebar, closeAuthSidebar } = useAuthSidebar();

  if (isUserBeingFetched) {
    return (
      <LoadingIndicator/>
    );
  }

  return (
    <AuthUserContext.Provider value={{ user, isUserBeingFetched, logIn, logOut }}>
      <AuthSidebarContext.Provider value={{ isAuthSidebarOpen, openAuthSidebar, closeAuthSidebar }}>

        <Header/>
        <AuthSidebar/>
        <MenuSidebar/>

        <div className="App__content">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home2" element={<Home2/>}/>

            <Route path="/profile" element={
              <AuthRequiredRoute>
                <Profile/>
              </AuthRequiredRoute>
            }/>
            <Route path="/reports" element={
              <AuthRequiredRoute>
                <Reports/>
              </AuthRequiredRoute>
            }/>
            <Route path="/programs" element={
              <AuthRequiredRoute>
                <ProgramList/>
              </AuthRequiredRoute>
            }/>
          </Routes>
        </div>

      </AuthSidebarContext.Provider>
    </AuthUserContext.Provider>
  );
}
