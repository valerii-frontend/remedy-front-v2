import avatarHunter from './images/user-hunter.jpg';
import avatarTriager from './images/user-triager.png';
import avatarOrganization from './images/user-organization.png';

export const __MOCK_USERS_BY_ROLE = {
  hunter: {
    username: 'pwn_master',
    role: 'hunter',
    email: '0xDEAD666@protonmail.com',
    avatar: avatarHunter,
  },
  organization: {
    username: 'BitLocker Inc.',
    role: 'organization',
    email: 'jeffrey@bitlocker.io',
    avatar: avatarOrganization,
  },
  triager: {
    username: 'Puni',
    role: 'triager',
    email: 'a.g@hexens.io',
    avatar: avatarTriager,
  },
};
