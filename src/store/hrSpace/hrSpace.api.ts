import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type experienceResponseType = {
  key: string[];
};

// const token =
//   'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiOTIyMWZmYzktNjQwZi00MzcyLTg2ZDMtY2U2NDJjYmE1NjAzIiwiYXVkIjoiZmFzdGFwaS11c2VyczphdXRoIiwiZXhwIjoxNTcxNTA0MTkzfQ.M10bjOe45I5Ncu_uXvOmVV8QxnL-nZfcH96U90JaocI';

export const hrSpaceApi = createApi({
  reducerPath: 'hrSpaceApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://hrspace.ddns.net/api',
    // headers: { Authorization: `Bearer ${token}` },
  }),

  endpoints: build => ({
    getExperiences: build.query<unknown, experienceResponseType>({
      query: () => ({
        url: '/work_experience',
        // mode: 'no-cors',
      }),
    }),
    getLogin: build.query<unknown, void>({
      query: () => ({
        url: '/',
        method: 'POST',
      }),
    }),
    getRegister: build.query<unknown, RegisterType>({
      query: body => ({
        url: '/auth/register',
        method: 'POST',
        body,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
  }),
});
export const { useLazyGetRegisterQuery, useGetExperiencesQuery } = hrSpaceApi;
