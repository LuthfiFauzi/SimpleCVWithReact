export default {
  LOGIN: '/login',
  REGISTER: 'auth/register',
  USERBYID: (userId) => {
    return `users/${userId}`;
  },
};
