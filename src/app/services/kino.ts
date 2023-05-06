import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

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
  // tagTypes: ['Collection'],
  endpoints: (build) => ({
    // addCollectionMovie: build.mutation({
    //   query: (newCollectionItem) => ({
    //     url: '',
    //     method: 'POST',
    //     body: newCollectionItem,
    //   }),
    // }),
    getCollectionMovie: build.query({
      query: (ttid) => `${ttid}`,
      // providesTags: (ttid) => [{ type: 'Collection', ttid }],
    }),
    getCollection: build.query({
      query: () => `?select=*`,
      // providesTags: (ttid) => [{ type: 'Collection', ttid }],
    }),
  }),
});

export const {
  // useAddCollectionMovieMutation,
  useGetCollectionMovieQuery,
  useGetCollectionQuery,
} = kinoApi;
