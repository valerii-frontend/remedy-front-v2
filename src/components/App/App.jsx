import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { AuthUserContext } from '../../context/AuthUserContext.js';
import { AuthSidebarContext } from '../../context/AuthSidebarContext.js';
import { useAuthUser } from '../../hooks/useAuthUser.js';
import { useAuthSidebar } from '../../hooks/useAuthSidebar.js';
import { getScrollbarWidth, setRootCSSVariable } from '../../utils.js';

import { LoadingIndicator } from '../LoadingIndicator/LoadingIndicator.jsx';
import { AuthSidebar } from '../Auth/AuthSidebar.jsx';
import { Home } from '../Home/Home.jsx';
import { AboutUs } from '../AboutUs/AboutUs.jsx';
import { Profile } from '../Profile/Profile.jsx';
import { ReportList } from '../Reports/ReportList.jsx';
import { ReportNew } from '../Reports/ReportNew.jsx';
import { ProgramList } from '../Programs/ProgramList.jsx';
import { ProgramNew } from '../Programs/ProgramNew.jsx';
import { ProgramDetails } from '../Programs/ProgramDetails.jsx';
import { Page404 } from '../Page404/Page404.jsx';
import { UIStyleGuide } from '../UI/UIStyleGuide.jsx';
import { RelayDemo } from '../RelayDemo/RelayDemo.jsx';
import { YourCodeHere } from '../YourCodeHere/YourCodeHere.jsx';

import './App.scss';


export function App(){
  const { user, isUserBeingFetched, logIn, logOut } = useAuthUser();
  const { isAuthSidebarOpen, openAuthSidebar, closeAuthSidebar } = useAuthSidebar();

  useEffect(() => {
    /**
     * Setting global CSS variables
     * @see src/styles/variables.scss
     */
    setRootCSSVariable('--remedy-Global--scrollbar-width', getScrollbarWidth() + 'px');
  });

  if (isUserBeingFetched) {
    return (
      <LoadingIndicator/>
    );
  }

  function checkAuth(element){
    return user ? element : <Navigate to="/" state={{ isAuthSidebarOpen: true }}/>;
  }

  return (
    <AuthUserContext.Provider value={{ user, isUserBeingFetched, logIn, logOut }}>
      <AuthSidebarContext.Provider value={{ isAuthSidebarOpen, openAuthSidebar, closeAuthSidebar }}>

        <AuthSidebar/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/ui" element={<UIStyleGuide/>}/>

          <Route path="/profile">
            <Route index element={checkAuth(<Profile/>)}/>
            <Route path="settings" element={checkAuth(<Profile/>)}/>
            <Route path="kyc" element={checkAuth(<Profile/>)}/>
          </Route>

          <Route path="/reports">
            <Route index element={checkAuth(<ReportList/>)}/>
          </Route>

          <Route path="/programs">
            <Route index element={checkAuth(<ProgramList/>)}/>
            <Route path=":programId" element={checkAuth(<ProgramDetails/>)}/>
            <Route path=":programId/submit-bug" element={checkAuth(<ReportNew/>)}/>
            <Route path="create" element={checkAuth(<ProgramNew/>)}/>
            <Route path="bookmarked" element={checkAuth(<ProgramList/>)}/>
          </Route>

          <Route path="/relay" element={checkAuth(<RelayDemo/>)}/>
          <Route path="/your-code-here" element={checkAuth(<YourCodeHere/>)}/>

          <Route path="/*" element={<Page404/>}/>
        </Routes>

      </AuthSidebarContext.Provider>
    </AuthUserContext.Provider>
  );
}
