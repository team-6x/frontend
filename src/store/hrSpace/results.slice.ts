import { createSlice } from '@reduxjs/toolkit';

const initialState: { [key: string]: { [key: string]: string | string[] } } = {
  firstResult: {
    vacancyName: 'Менеджер по персоналу',
    additionalInfo: 'Дополнительная инфа',
    industry: 'Добывающая промышленность',
    responsibilities: ['Делать дело, кушать еду', 'Помогать сотрудникам'],
    skills: 'тест',
    experience: 'тест',
    education: 'тест',
    type: 'тест',
    salary: 'тест',
    format: 'тест',
    medical: 'тест',
    bonuses: 'тест',
    location: 'тест',
    banned: 'тест',
    test: 'тест',
  },
  secondResult: {
    payMethod: '',
  },
  thirdResult: {
    compensation: 'тест',
    costForSpeed: 'Ветка',
    dateForFirstResume: 'тест',
    dateForWork: 'тест',
    recruitCount: 'тест',
    workType: 'тест',
    recruitType: '',
    experienceForRecruiter: 'тест',
    interviews: 'Нет',
    recommendations: 'Нет',
    security: 'тест',
  },
};

export const resultsSlice = createSlice({
  name: 'results',
  initialState,
  reducers: {
    setFirstResult: (state, action) => {
      const { value, name } = action.payload;
      return {
        ...state,
        firstResult: {
          ...state.firstResult,
          [name]: value,
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
      const { name, value } = action.payload;
      return {
        ...state,
        thirdResult: {
          ...state.thirdResult,
          [name]: value,
        },
      };
    },
    clearResults: () => initialState,
  },
});

export const resultsActions = resultsSlice.actions;
export const resultsReducer = resultsSlice.reducer;
