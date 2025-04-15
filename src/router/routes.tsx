import ChartsPage from '@/pages/Charts';
import DashboardPage from '@/pages/Dashboard';
import FormComPage from '@/pages/FormComPage';
import LoginPage from '@/pages/LoginPage';
import path from 'path';
import { lazy } from 'react';
const Home = lazy(() => import('../pages/Home'));

const routes = [
    // dashboard
    {
        path: '/',
        element: <Home />,
        layout: 'default',
    },
    {
        path: '/dashboard',
        element: <DashboardPage />,
    },
    {
        path:'/form/form-component',
        element:<FormComPage/>
    },
    {
        path: '/dashboard/charts',
        element:<ChartsPage/>
    },
    {
        path: '/auth/login',
        element:<LoginPage/>,
        layout:'blank',
    }

];

export { routes };