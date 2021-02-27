import React from 'react';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const ForgotPassword = React.lazy(() => import('./views/pages/login/ForgotPassword'));

const routes = [
  { path: '/dashboard', exact: true, name: 'Dashboard', component: Dashboard},
  { path: '/forgot_password', exact: true, name: 'Forgot Password', component: ForgotPassword}
]

export default routes;
