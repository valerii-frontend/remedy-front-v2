import { createContext } from 'react';

/**
 * @typedef {Object} User
 * @property {string} username - The username of the user
 * @property {'hunter'|'organization'|'triager'} role - The role of the user
 * @property {string} email - The email of the user
 */

/**
 * @typedef {Object} AuthCurrentUserContextType
 * @property {User|null} currentUser - The current user, or null if no user is logged in
 * @property {((user: User|null) => void)|null} setCurrentUser - Function to set the current user
 */

/**
 * Context for authentication and current user data.
 * @type {React.Context<AuthCurrentUserContextType>}
 */
export const AuthCurrentUserContext = createContext({
  currentUser: null,
  setCurrentUser: null,
});



/**
 * @typedef {Object} AuthIsSidebarOpenContextType
 * @property {boolean} isAuthSidebarOpen - A boolean indicating whether the authentication sidebar is open
 * @property {((isOpen: boolean) => void)|null} setIsAuthSidebarOpen - Function to set the open state of the authentication sidebar
 */

/**
 * Context for the open state of the authentication sidebar.
 * @type {React.Context<AuthIsSidebarOpenContextType>}
 */
export const AuthIsSidebarOpenContext = createContext({
  isAuthSidebarOpen: false,
  setIsAuthSidebarOpen: null,
});
