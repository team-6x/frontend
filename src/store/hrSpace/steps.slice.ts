import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstStep: false,
  secondStep: false,
  thirdStep: false,
} as const;

export const stepsSlice = createSlice({
  name: 'steps',
  initialState,
  reducers: {
    setFirstStep(
      state,
      { payload }: { payload: (typeof initialState)['firstStep'] },
    ) {
      state.firstStep = payload;
    },
    setSecondStep(
      state,
      { payload }: { payload: (typeof initialState)['secondStep'] },
    ) {
      state.secondStep = payload;
    },
    setThirdStep(
      state,
      { payload }: { payload: (typeof initialState)['thirdStep'] },
    ) {
      state.thirdStep = payload;
    },
  },
});

export const stepsActions = stepsSlice.actions;
export const stepsReducer = stepsSlice.reducer;
