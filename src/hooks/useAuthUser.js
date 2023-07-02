import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const USERS_BY_ROLE = {
  hunter: {
    username: 'pwn_master',
    role: 'hunter',
    email: '0xDEAD666@protonmail.com',
  },
  organization: {
    username: 'BitLocker Inc.',
    role: 'organization',
    email: 'jeffrey@bitlocker.io',
  },
  triager: {
    username: 'Puni',
    role: 'triager',
    email: 'a.s@hexens.io',
  },
};


export function useAuthUser(){
  const [user, setUser] = useState(null);
  const [isUserBeingFetched, setIsUserBeingFetched] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('remedy_user'));

    setTimeout(() => {
      console.error('Request user', userData);
      setUser(userData);
      setIsUserBeingFetched(false);
    }, 300);
  }, []);

  function logIn(role){
    const userData = USERS_BY_ROLE[role];

    setTimeout(() => {
      localStorage.setItem('remedy_user', JSON.stringify(userData));
      setUser(userData);
    }, 300);
  }

  function logOut(){
    localStorage.removeItem('remedy_user');
    setUser(null);
    navigate('/');
  }

  return {
    user,
    isUserBeingFetched,
    logIn,
    logOut,
  };
}
