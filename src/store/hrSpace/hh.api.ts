import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const hhApi = createApi({
  reducerPath: 'hhApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.hh.ru/',
  }),
  tagTypes: [],

  endpoints: build => ({
    getIndustries: build.query<IndustryResponseType[], void>({
      query: () => ({
        url: 'industries',
      }),
    }),
    getVacancyNames: build.query<unknown, { text: string }>({
      query: ({ text }) => ({
        url: 'vacancy_positions',
        params: {
          text: text,
        },
      }),
    }),
    getLocations: build.query<unknown, { text: string }>({
      query: text => ({
        url: 'suggests/area_leaves',
        params: {
          text: text,
        },
      }),
    }),
    getSkills: build.query<unknown, { text: string }>({
      query: ({ text }) => ({
        url: 'suggests/skill_set',
        params: {
          text: text,
        },
      }),
    }),
  }),
});
export const {
  useGetIndustriesQuery,
  useLazyGetVacancyNamesQuery,
  useLazyGetLocationsQuery,
  useLazyGetSkillsQuery,
} = hhApi;
