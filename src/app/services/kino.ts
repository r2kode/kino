import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Movie } from '@/types/movie';

const KINO_COLLECTION_API = import.meta.env.VITE_KINO_COLLECTION_API;
const API_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export type Collection = {
  movies: Movie[];
  collectionCount: number;
};

export const kinoApi = createApi({
  reducerPath: 'kinoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: KINO_COLLECTION_API,
    prepareHeaders: (headers) => {
      headers.set('authorization', `Bearer ${API_KEY}`);
      headers.set('apiKey', `${API_KEY}`);
      headers.set('Content-Type', 'application/json');
      headers.set('Prefer', 'count=exact');
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
    getCollection: build.query<Collection, Record<string, number>>({
      query: ({ page, pageSize }) => {
        const start = (page - 1) * pageSize;
        const end = start + pageSize - 1;

        return {
          url: `?select=*`,
          method: 'GET',
          headers: new Headers({ Range: `${start}-${end}` }),
        };
      },
      transformResponse: (response, meta) => {
        const contentRange = meta?.response?.headers.get('content-range');
        return {
          movies: response as Movie[],
          collectionCount: contentRange
            ? +(contentRange.split('/').at(-1) ?? 1)
            : 0,
        };
      },
      providesTags: (result) => {
        return result
          ? [
              ...result.movies.map(
                ({ ttid }) => ({ type: 'Collection', ttid } as const)
              ),
              { type: 'Collection' as const, id: 'LIST' },
            ]
          : [{ type: 'Collection' as const, id: 'LIST' }];
      },
    }),
  }),
});

export const {
  useAddCollectionMovieMutation,
  useGetCollectionMovieQuery,
  useGetCollectionQuery,
} = kinoApi;
