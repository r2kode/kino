import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MovieResponse } from '@/types/movie';

const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_IMDB_API_KEY;

export const moviesApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: VITE_BASE_URL }),
  tagTypes: ['Movie'],
  endpoints: (build) => ({
    searchMovie: build.query<MovieResponse, string>({
      query: (title) => `Search/${API_KEY}/${title}`,
      providesTags: (resData) =>
        resData?.results
          ? [
              ...resData.results.map(({ id }) => ({
                type: 'Movie' as const,
                id,
              })),
              { type: 'Movie', id: 'LIST' },
            ]
          : [{ type: 'Movie', id: 'LIST' }],
    }),
    getMovieDetails: build.query({
      query: (id) => `Title/${API_KEY}/${id}`,
      providesTags: (result, error, id) => [{ type: 'Movie', id }],
    }),
  }),
});

export const { useSearchMovieQuery, useGetMovieDetailsQuery } = moviesApi;
