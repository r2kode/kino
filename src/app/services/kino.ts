import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Movie } from '@/types/movie';

const KINO_COLLECTION_API = import.meta.env.VITE_KINO_COLLECTION_API;
const API_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const kinoApi = createApi({
  reducerPath: 'kinoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: KINO_COLLECTION_API,
    prepareHeaders: (headers) => {
      headers.set('authorization', `Bearer ${API_KEY}`);
      headers.set('apiKey', `${API_KEY}`);
      return headers;
    },
  }),
  tagTypes: ['Collection'],
  endpoints: (build) => ({
    addCollectionMovie: build.mutation({
      query: (newCollectionItem) => ({
        url: '',
        method: 'POST',
        body: newCollectionItem,
      }),
      invalidatesTags: (_, __, { ttid }) => [
        { type: 'Collection', ttid },
        { type: 'Collection', id: 'LIST' },
      ],
    }),
    getCollectionMovie: build.query({
      query: (ttid) => `?ttid=eq.${ttid}&select=ttid`,
      providesTags: (_res, _err, ttid) => [{ type: 'Collection', ttid }],
    }),
    getCollection: build.query<Movie[], void>({
      query: () => `?select=*`,
      providesTags: (result = []) => [
        ...result.map(({ ttid }) => ({ type: 'Collection', ttid } as const)),
        { type: 'Collection' as const, id: 'LIST' },
      ],
    }),
  }),
});

export const {
  useAddCollectionMovieMutation,
  useGetCollectionMovieQuery,
  useGetCollectionQuery,
} = kinoApi;
