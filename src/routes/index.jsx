import MainLayout from '@layouts/MainLayout';

import Home from '@pages/Home';
import LoginPage from '@pages/Login';
import Registration from '@pages/Registration';
import NotFound from '@pages/NotFound';

const routes = [
  {
    path: '/',
    name: 'Home',
    protected: false,
    component: Home,
    layout: MainLayout,
  },
  {
    path: '/login',
    name: 'Login',
    protected: false,
    component: LoginPage,
    layout: MainLayout,
  },
  {
    path: '/signup',
    name: 'Registration',
    protected: false,
    component: Registration,
    layout: MainLayout,
  },
  { path: '*', name: 'Not Found', component: NotFound, layout: MainLayout, protected: false },
];

export default routes;
