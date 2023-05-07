import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MovieSearchResponse } from '@/types/movie';

const IMDB_BASE_URL = import.meta.env.VITE_IMDB_BASE_URL;
const API_KEY = import.meta.env.VITE_IMDB_API_KEY;

export const imdbApi = createApi({
  reducerPath: 'imdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: IMDB_BASE_URL }),
  tagTypes: ['Title'],
  endpoints: (build) => ({
    searchMovie: build.query<MovieSearchResponse, string>({
      query: (title) => `Search/${API_KEY}/${title}`,
      providesTags: (resData) =>
        resData?.results
          ? [
              ...resData.results.map(({ id }) => ({
                type: 'Title' as const,
                id,
              })),
              { type: 'Title', id: 'LIST' },
            ]
          : [{ type: 'Title', id: 'LIST' }],
    }),
    getMovieDetails: build.query({
      query: (id) => `Title/${API_KEY}/${id}`,
      providesTags: (result, error, id) => [{ type: 'Title', id }],
    }),
  }),
});

export const { useSearchMovieQuery, useGetMovieDetailsQuery } = imdbApi;
