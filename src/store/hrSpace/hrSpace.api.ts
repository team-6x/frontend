import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000/api/v1/',
    prepareHeaders: headers => {
      const authToken = localStorage.getItem('authToken');
      if (authToken) {
        headers.set('authorization', `Token ${authToken}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Example'],

  endpoints: build => ({
    getPrograms: build.query<unknown, void>({
      query: () => ({
        url: 'utility/programs',
      }),
    }),
  }),
});
export const { useGetProgramsQuery } = api;
