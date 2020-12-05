import {
  Home,
  Profile,
  Experience,
  Education,
  Contact,
  Login,
  ProfileId,
  InfoCorona,
  DetailDate,
} from '../pages';

const routes = [
  {
    path: '/profile/:profileId',
    component: ProfileId,
    isPublic: false,
  },
  {
    path: '/profile',
    component: Profile,
    isPublic: false,
  },
  // private Route
  {
    path: '/contact',
    component: Contact,
    isPublic: false,
  },

  // Public Route
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
    path: '/login',
    component: Login,
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
