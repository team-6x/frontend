import { createSlice } from '@reduxjs/toolkit';

const initialState: { [key: string]: { [key: string]: string | string[] } } = {
  firstStep: {
    vacancyName: 'Менеджер по персоналу',
    industry: 'Добывающая промышленность',
    responsibilities: ['Делать дело, кушать еду', 'Помогать сотрудникам'],
    skills: [''],
    experience: '',
    education: '',
    type: '',
    salary: '',
    format: '',
    medical: '',
    bonuses: '',
    location: '',
    banned: [''],
    test: '',
  },
  secondStep: {
    payMethod: '',
  },
  thirdStep: {
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
    setFirstStep: (state, action) => {
      const { key, value } = action.payload;
      return {
        ...state,
        firstStep: {
          ...state.firstStep,
          [key]: value,
        },
      };
    },
    setSecondStep: (state, action) => {
      const { key, value } = action.payload;
      return {
        ...state,
        secondStep: {
          ...state.secondStep,
          [key]: value,
        },
      };
    },
    setThirdStep: (state, action) => {
      const { key, value } = action.payload;
      return {
        ...state,
        thirdStep: {
          ...state.thirdStep,
          [key]: value,
        },
      };
    },
    clearResults: () => initialState,
  },
});

export const resultsActions = resultsSlice.actions;
export const resultsReducer = resultsSlice.reducer;
