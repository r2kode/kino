import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './pages/Layout';
import { App } from '@/pages/App';
import { Details } from './pages/Details';
import { Collection } from './pages/Collection';

const routes = [
  { label: 'Details', path: 'details', element: <Details /> },
  { label: 'Collection', path: 'collection', element: <Collection /> },
];

export const navItems = [...routes.map(({ label, path }) => ({ path, label }))];

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { element: <App />, index: true },
      ...routes.map(({ path, element }) => ({ path, element })),
    ],
  },
]);
