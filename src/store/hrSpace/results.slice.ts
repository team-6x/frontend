import { createSlice } from '@reduxjs/toolkit';

const initialState: { [key: string]: { [key: string]: string | string[] } } = {
  firstResult: {
    vacancyName: 'Менеджер по персоналу',
    industry: 'Добывающая промышленность',
    responsibilities: ['Делать дело, кушать еду', 'Помогать сотрудникам'],
    skills: '',
    experience: '',
    education: '',
    type: '',
    salary: '',
    format: '',
    medical: '',
    bonuses: '',
    location: '',
    banned: '',
    test: '',
  },
  secondResult: {
    payMethod: '',
  },
  thirdResult: {
    compensation: '',
    costForSpeed: 'Ветка',
    dateForFirstResume: '',
    dateForWork: '',
    recruitCount: '',
    salaryForRecruiter: 'Ветка',
    recruitType: '',
    experienceForRecruiter: '',
    interviews: 'Нет',
    recommendations: 'Нет',
    security: '',
  },
};

export const resultsSlice = createSlice({
  name: 'results',
  initialState,
  reducers: {
    setFirstResult: (state, action) => {
      const { key, value } = action.payload;
      return {
        ...state,
        firstResult: {
          ...state.firstResult,
          [key]: value,
        },
      };
    },
    setSecondResult: (state, action) => {
      return {
        ...state,
        secondResult: action.payload,
      };
    },
    setThirdResult: (state, action) => {
      const { key, value } = action.payload;
      return {
        ...state,
        thirdResult: {
          ...state.thirdResult,
          [key]: value,
        },
      };
    },
    clearResults: () => initialState,
  },
});

export const resultsActions = resultsSlice.actions;
export const resultsReducer = resultsSlice.reducer;
