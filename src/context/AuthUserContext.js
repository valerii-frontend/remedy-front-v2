import { createContext } from 'react';


/**
 * @typedef {Object} User
 * @property {string} username
 * @property {'hunter'|'organization'|'triager'} role
 * @property {string} email
 * @property {string} avatar
 */

/**
 * @typedef {Object} AuthUserContextType
 * @property {User|null} user - The current user, or null if no user is logged in
 * @property {boolean} isUserBeingFetched - A boolean indicating whether the user data is being fetched
 * @property {((role: string) => void)|null} logIn
 * @property {(() => void)|null} logOut
 */

/**
 * @type {React.Context<AuthUserContextType>}
 */
export const AuthUserContext = createContext({
  user: null,
  isUserBeingFetched: false,
  logIn: null,
  logOut: null,
});
