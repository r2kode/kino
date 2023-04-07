import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { AuthProvider } from './app/providers/auth/Provider';
import { moviesApi } from './app/services/movies';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <ApiProvider api={moviesApi}>
        <RouterProvider router={router} />
      </ApiProvider>
    </AuthProvider>
  </React.StrictMode>
);
