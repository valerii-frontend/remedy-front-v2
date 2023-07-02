import { createContext } from 'react';

/**
 * @typedef {Object} AuthSidebarContextType
 * @property {boolean} isAuthSidebarOpen
 * @property {(() => void)|null} openAuthSidebar
 * @property {(() => void)|null} closeAuthSidebar
 */

/**
 * @type {React.Context<AuthSidebarContextType>}
 */
export const AuthSidebarContext = createContext({
  isAuthSidebarOpen: false,
  openAuthSidebar: null,
  closeAuthSidebar: null,
});
