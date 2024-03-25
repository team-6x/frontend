import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  firstTab: false,
  secondTab: false,
  thirdTab: false,
  forthTab: false,
  fifthTab: false,
  sixthTab: false,
  seventhTab: false,
  eighthTab: false,
  ninthTab: false,
};

export const tabsSlice = createSlice({
  name: 'tabs',
  initialState,
  reducers: {
    setTabTrue: (state, action: PayloadAction<keyof typeof initialState>) => {
      state[action.payload] = true;
    },
    setTabFalse: (state, action: PayloadAction<keyof typeof initialState>) => {
      state[action.payload] = false;
    },
  },
});

export const tabsActions = tabsSlice.actions;
export const tabsReducer = tabsSlice.reducer;
