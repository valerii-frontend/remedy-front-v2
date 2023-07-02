import React, { Fragment, useContext, useState } from 'react';
import {
  BrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Outlet,
  Navigate,
  useNavigate,
  useLocation,
  useNavigation,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import { AuthCurrentUserContext, AuthIsSidebarOpenContext } from '../../context/AuthContext.js';
import { auth } from '../../services/auth.js';
import { AuthSidebar } from '../Auth/AuthSidebar.jsx';
import { MenuSidebar } from '../MenuSidebar/MenuSidebar.jsx';
import { Home } from '../Home/Home.jsx';
import { Home2 } from '../Home2/Home2.jsx';
import { Profile } from '../Profile/Profile.jsx';
import { Reports } from '../Reports/Reports.jsx';
import { ProgramList } from '../ProgramList/ProgramList.jsx';
import { Header } from '../Header/Header.jsx';
import './App.scss';


function RouteRequiresAuth({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  // const navigation = useNavigation();

  if (!auth.currentUser) {
    // return <Navigate to="/" state={{ isAuthSidebarOpen: true }}/>;
    const { setIsAuthSidebarOpen } = useContext(AuthIsSidebarOpenContext);

    console.warn('__need auth', {
      navigate,
      location,
      // navigation,
      lolo: <Outlet />
    });

    requestAnimationFrame(() => {
      setIsAuthSidebarOpen(true);
    });
    // return <Home/>;
    return <Navigate to="/"/>;
  }
  return children;
}





// <RouterProvider router={router} />


const router = createBrowserRouter(
  createRoutesFromElements(
    <Fragment>
      <Route path="/" element={<Home/>}/>
      <Route path="/home2" element={<Home2/>}/>

      <Route path="/profile" element={
        <RouteRequiresAuth>
          <Profile/>
        </RouteRequiresAuth>
      }/>
      <Route path="/reports" element={
        <RouteRequiresAuth>
          <Reports/>
        </RouteRequiresAuth>
      }/>
      <Route path="/programs" element={
        <RouteRequiresAuth>
          <ProgramList/>
        </RouteRequiresAuth>
      }/>
    </Fragment>
  )
);



export function App(){
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthSidebarOpen, setIsAuthSidebarOpen] = useState(false);

  let lolo = (isOpen) => {
    console.error('__setIsAuthSidebarOpen', isOpen);
    setIsAuthSidebarOpen(isOpen);
  };

  let __auth = (child) => {
    console.error('__auth', child);
    // return child

    if (!auth.currentUser) {
      setIsAuthSidebarOpen(true);
      return <Home/>;
      // return <Navigate to="/"/>;
    }
    else {
      return child
    }
  };

  const __home = () => {
    console.warn('__HOME');
    return <Home/>;
  };

  return (
    <div className="App">
      <AuthCurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
        <AuthIsSidebarOpenContext.Provider value={{ isAuthSidebarOpen, setIsAuthSidebarOpen: lolo }}>
          <BrowserRouter>

            <Header/>
            <AuthSidebar/>
            <MenuSidebar/>

            <div className="App__content">
              <button onClick={() => setIsAuthSidebarOpen(true)}>Open auth sidebar</button>

              {/*<RouterProvider router={router} />*/}

              <Routes>

              {/*  /!*<Route path="/" element={<Home/>}/>*!/*/}
              {/*  /!*<Route path="/" element={*!/*/}
              {/*  /!*  __home()*!/*/}
              {/*  /!*}/>*!/*/}

              {/*  /!*<Route path="/profile" element={*!/*/}
              {/*  /!*  __auth(<Profile/>)*!/*/}
              {/*  /!*}/>*!/*/}
              {/*  /!*<Route path="/reports" element={*!/*/}
              {/*  /!*  __auth(<Reports/>)*!/*/}
              {/*  /!*}/>*!/*/}
              {/*  /!*<Route path="/programs" element={*!/*/}
              {/*  /!*  __auth(<ProgramList/>)*!/*/}
              {/*  /!*}/>*!/*/}


                <Route path="/" element={<Home/>}/>
                <Route path="/home2" element={<Home2/>}/>

                <Route path="/profile" element={
                  <RouteRequiresAuth>
                    <Profile/>
                  </RouteRequiresAuth>
                }/>
                <Route path="/reports" element={
                  <RouteRequiresAuth>
                    <Reports/>
                  </RouteRequiresAuth>
                }/>
                <Route path="/programs" element={
                  <RouteRequiresAuth>
                    <ProgramList/>
                  </RouteRequiresAuth>
                }/>

              </Routes>
            </div>

          </BrowserRouter>
        </AuthIsSidebarOpenContext.Provider>
      </AuthCurrentUserContext.Provider>
    </div>
  );
}
