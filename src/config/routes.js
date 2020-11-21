import {
  Home,
  Experience,
  Education,
  Achievement,
  Contact,
  InfoCorona,
} from '../pages';
import DetailDate from '../pages/detailDate';

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
    path: '/infoCorona/:dateId',
    component: DetailDate,
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
