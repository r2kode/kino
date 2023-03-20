import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './pages/Layout';
import { App } from '@/pages/App';
import { Details } from './pages/Details';
import { Collection } from './pages/Collection';

export enum RoutePaths {
  COLLECTION = 'collection',
  DETAILS = 'details',
}

const routes = [
  { label: 'Collection', path: RoutePaths.COLLECTION, element: <Collection /> },
];

export const navItems = [...routes.map(({ label, path }) => ({ path, label }))];

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { element: <App />, index: true },
      { element: <Details />, path: `${RoutePaths.DETAILS}/:id` },
      ...routes.map(({ path, element }) => ({ path, element })),
    ],
  },
]);
