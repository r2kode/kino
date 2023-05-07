import { configureStore } from '@reduxjs/toolkit';
import { kinoApi } from '@/app/services/kino';
import { imdbApi } from '@/app/services/imdb';

export const store = configureStore({
  reducer: {
    [kinoApi.reducerPath]: kinoApi.reducer,
    [imdbApi.reducerPath]: imdbApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([kinoApi.middleware, imdbApi.middleware]),
});
