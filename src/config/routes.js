import { Home, Profile, Contact } from '../pages';

const routes = [
  // private Route
  {
    path: '/contact',
    component: Contact,
    isPublic: false,
  },

  // Public Route
  {
    path: '/profile',
    component: Profile,
    isPublic: true,
  },
  {
    path: '/home',
    component: Home,
    isPublic: true,
  },
  {
    path: '/',
    component: Home,
    isPublic: true,
  },
];

export default routes;
