import { createSlice } from '@reduxjs/toolkit';

const initialState: { [key: string]: string | string[] } = {
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
};

export const resultsSlice = createSlice({
  name: 'results',
  initialState,
  reducers: {
    setResults: (state, action) => {
      const { key, value } = action.payload;
      return {
        ...state,
        [key]: value,
      };
    },
    clearResults: () => initialState,
  },
});

export const resultsActions = resultsSlice.actions;
export const resultsReducer = resultsSlice.reducer;
