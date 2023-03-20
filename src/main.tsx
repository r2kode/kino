import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { moviesApi } from './app/services/movies';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApiProvider api={moviesApi}>
      <RouterProvider router={router} />
    </ApiProvider>
  </React.StrictMode>
);
