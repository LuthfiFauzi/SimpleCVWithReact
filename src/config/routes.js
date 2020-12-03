<<<<<<< Updated upstream
import { Home, Experience, Education, Achievement, Contact } from '../pages';
=======
import {
  Home,
  LoginProfile,
  Achievement,
  Experience,
  Education,
  Contact,
  Login,
  LoginProfileId,
  InfoCorona,
  DetailDate,
} from '../pages';
>>>>>>> Stashed changes

const routes = [
  {
    path: '/loginProfile',
    component: LoginProfile,
    isPublic: false,
  },
  {
    path: '/loginProfile/:loginProfileId',
    component: LoginProfileId,
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
<<<<<<< Updated upstream
=======
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
>>>>>>> Stashed changes
    path: '/',
    component: Home,
    isPublic: true,
  },
];

export default routes;
