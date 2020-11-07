import {
  Home,
  Experience,
  Education,
  Achievement,
  Contact,
  InfoCorona,
} from '../pages';

const routes = [
  // private Route
  {
    path: '/contact',
    component: Contact,
    isPublic: false,
  },

  // Public Route
  {
    path: '/achievement',
    component: Achievement,
    isPublic: true,
  },
  {
    path: '/education',
    component: Education,
    isPublic: true,
  },
  {
    path: '/experience',
    component: Experience,
    isPublic: true,
  },
  {
    path: '/home',
    component: Home,
    isPublic: true,
  },
  {
    path: '/infoCorona',
    component: InfoCorona,
    isPublic: true,
  },
  {
    path: '/',
    component: Home,
    isPublic: true,
  },
];

export default routes;
