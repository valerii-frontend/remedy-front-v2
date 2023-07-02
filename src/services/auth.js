class Auth {

  ROUTES_REQUIRING_AUTH = [
    '/profile',
    '/reports',
    '/programs',
  ];

  USERS_BY_ROLE = {
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

  currentUser = null;

  get token(){
    return localStorage.getItem('remedy_user');
  };

  getCurrentUser = () => {
    return new Promise(resolve => {
      if (this.currentUser) {
        resolve(this.currentUser);
      }
      else {
        setTimeout(() => {
          const user = JSON.parse(this.token);
          this.currentUser = user;
          resolve(user);
        }, 300);
      }
    });
  };

  logIn = (role) => {
    return new Promise(resolve => {
      setTimeout(() => {
        const user = this.USERS_BY_ROLE[role];
        this.currentUser = user;
        localStorage.setItem('remedy_user', JSON.stringify(user));
        resolve(user);
      }, 300);
    });
  };

  logOut = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        localStorage.removeItem('remedy_user');
        this.currentUser = null;
        resolve();
      }, 300);
    });
  };
}

export const auth = new Auth();
