import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstStep: false,
  secondStep: false,
  thirdStep: false,
};

export const stepsSlice = createSlice({
  name: 'steps',
  initialState,
  reducers: {
    setFirstStep(state, { payload }: { payload: boolean }) {
      state.firstStep = payload;
    },
    setSecondStep(state, { payload }: { payload: boolean }) {
      state.secondStep = payload;
    },
    setThirdStep(state, { payload }: { payload: boolean }) {
      state.thirdStep = payload;
    },
  },
});

export const stepsActions = stepsSlice.actions;
export const stepsReducer = stepsSlice.reducer;
