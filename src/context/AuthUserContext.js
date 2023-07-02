import { createContext } from 'react';


/**
 * @typedef {Object} User
 * @property {string} username - The username of the user
 * @property {'hunter'|'organization'|'triager'} role - The role of the user
 * @property {string} email - The email of the user
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
