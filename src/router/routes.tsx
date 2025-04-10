import ChartsPage from '@/pages/Charts';
import DashboardPage from '@/pages/Dashboard';
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
        path: '/dashboard/charts',
        element:<ChartsPage/>
    }

];

export { routes };