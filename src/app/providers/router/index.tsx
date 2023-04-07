import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '@/pages/Layout';
import { App } from '@/pages/App';
import { Details } from '@/pages/Details';
import { Collection } from '@/pages/Collection';
import { Login } from '@/pages/Login';
import { AuthRoute } from '@/features/auth';

export enum RoutePaths {
  COLLECTION = '/collection',
  DETAILS = '/details',
  LOGIN = '/login',
}

const routes = [
  { element: <App />, index: true },
  { element: <Details />, path: `${RoutePaths.DETAILS}/:id` },
  {
    element: (
      <AuthRoute>
        <Collection />
      </AuthRoute>
    ),
    path: RoutePaths.COLLECTION,
    label: 'Collection',
    navItem: true,
  },
  { element: <Login />, path: RoutePaths.LOGIN, label: 'Login' },
];

export const navItems = [
  ...routes.filter(({ label, path, navItem }) => navItem && { path, label }),
];

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: routes,
  },
]);
