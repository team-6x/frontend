import { createSlice } from '@reduxjs/toolkit';

const initialState: { [key: string]: { [key: string]: string | string[] } } = {
  firstResult: {
    vacancyName: '',
    additionalInfo: '',
    industry: '',
    responsibilities: '',
    skills: '',
    experience: '',
    additionalRequirements: '',
    education: '',
    type: '',
    salaryMin: '',
    salaryMax: '',
    format: '',
    medical: '',
    bonuses: '',
    location: '',
    banned: '',
    test: '',
    additionalInfo2: '',
    additionalWorkConditions: '',
  },
  secondResult: {
    payMethod: '',
  },
  thirdResult: {
    compensation: '',
    costForSpeed: '',
    dateForWork: '',
    dateForFirstResume: '',
    recruitCount: '',
    workType: '',
    recruitType: '',
    experienceForRecruiter: '',
    interviews: '',
    recommendations: '',
    security: '',
    additionalRecruiterСonditions: '',
    additionalRecruiterRequirements: '',
    additionalRecruiterOtherInfo: '',
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
