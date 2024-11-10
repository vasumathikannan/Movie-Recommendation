// Importing packages
import { lazy } from 'react';

// Importing routes
const Home = lazy(() => import('../Pages/HomePage'));
const Movies = lazy(() => import('../Pages/MoviesPage'));
const Login = lazy(() => import('../Pages/LoginPage'));
const Admin = lazy(() => import('../Pages/AdminPage'));
const Register = lazy(() => import('../Pages/RegisterPage'));
const Favorites = lazy(() => import('../Pages/FavoritesPage'));

export const navigationRouts = [
  {
    name: 'Home',
    path: '/',
    component: <Home />
  },
  {
    name: 'Movies',
    path: '/movies',
    component: <Movies />
  },
  {
    name: 'Login',
    path: '/login',
    component: <Login />  // This will serve both user and admin login
  },
  {
    name: 'Admin',
    path: '/admin',
    component: <Login />  // Admin login uses the same Login page with a query parameter
  },
  {
    name: 'Register',
    path: '/register',
    component: <Register />
  },
  {
    name: 'Favorites',
    path: '/favourites',
    component: <Favorites />
  }
];

export default {
  navigationRouts
};
