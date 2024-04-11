import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const hhApi = createApi({
  reducerPath: 'hhApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.hh.ru/',
  }),

  endpoints: build => ({
    getVacancys: build.query<ProfessionalRoleResponseType, { text: string }>({
      query: text => ({
        url: 'suggests/vacancy_positions',
        params: text,
      }),
    }),
    getIndustries: build.query<IndustryResponseType[], void>({
      query: () => ({
        url: 'industries',
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
    getSkills: build.query<SkillsResponseType, { text: string }>({
      query: text => ({
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
  useLazyGetVacancysQuery,
  useLazyGetLocationsQuery,
  useLazyGetSkillsQuery,
} = hhApi;
