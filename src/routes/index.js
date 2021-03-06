import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import LoginRoutes from './LoginRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
import Loadable from 'ui-component/Loadable';

const PagesLanding = Loadable(lazy(() => import('views/pages/landing')));
const ResourcesPage = Loadable(lazy(() => import('views/resources')));
const FaqPage = Loadable(lazy(() => import('views/faq')));
const ExamplesPage = Loadable(lazy(() => import('views/examples')));
const ApplicationPage = Loadable(lazy(() => import('views/application')));
const CasesPage = Loadable(lazy(() => import('views/cases')));

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    return useRoutes([
        { path: '/', element: <PagesLanding /> },
        { path: '/cases', element: <CasesPage /> },
        { path: '/faq', element: <FaqPage /> },
        { path: '/resources', element: <ResourcesPage /> },
        { path: '/examples', element: <ExamplesPage /> },
        { path: '/dashboard', element: <ApplicationPage /> }
    ]);
}
