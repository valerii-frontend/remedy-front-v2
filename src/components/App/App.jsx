import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { AuthUserContext } from '../../context/AuthUserContext.js';
import { AuthSidebarContext } from '../../context/AuthSidebarContext.js';
import { useAuthUser } from '../../hooks/useAuthUser.js';
import { useAuthSidebar } from '../../hooks/useAuthSidebar.js';

import { LoadingIndicator } from '../LoadingIndicator/LoadingIndicator.jsx';
import { AuthSidebar } from '../Auth/AuthSidebar.jsx';
import { AuthRequiredRoute } from '../Auth/AuthRequiredRoute.jsx';
import { Home } from '../Home/Home.jsx';
import { AboutUs } from '../AboutUs/AboutUs.jsx';
import { Profile } from '../Profile/Profile.jsx';
import { Reports } from '../Reports/Reports.jsx';
import { ProgramList } from '../ProgramList/ProgramList.jsx';
import './App.scss';
import { __Placeholder } from '../User/__Placeholder.jsx';


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

        <AuthSidebar/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<AboutUs/>}/>

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
          <Route path="/*" element={
            <AuthRequiredRoute>
              <__Placeholder/>
            </AuthRequiredRoute>
          }/>

        </Routes>

      </AuthSidebarContext.Provider>
    </AuthUserContext.Provider>
  );
}
