import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_IMDB_API_KEY;

export const moviesApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: VITE_BASE_URL }),
  tagTypes: ['Movie'],
  endpoints: (build) => ({
    searchMovie: build.query({
      query: (title) => `Search/${API_KEY}/${title}`,
      providesTags: ['Movie'],
    }),
    getMovieDetails: build.query({
      query: (id) => `Title/${API_KEY}/${id}`,
    }),
  }),
});

export const { useSearchMovieQuery, useGetMovieDetailsQuery } = moviesApi;
