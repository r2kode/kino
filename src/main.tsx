import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { moviesApi } from './app/services/movies';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApiProvider api={moviesApi}>
      <App />
    </ApiProvider>
  </React.StrictMode>
);
