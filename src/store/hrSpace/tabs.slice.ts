import { createSlice } from '@reduxjs/toolkit';

interface ITabs {
  firstTabsGroup: number;
  secondTabsGroup: number;
}

const initialState: ITabs = {
  firstTabsGroup: 0,
  secondTabsGroup: 0,
};

export const tabsSlice = createSlice({
  name: 'tabs',
  initialState,
  reducers: {
    setFirstTabsGroup: (state, action) => {
      state.firstTabsGroup = action.payload;
    },
    setSecondTabsGroup: (state, action) => {
      state.secondTabsGroup = action.payload;
    },
  },
});

export const tabsActions = tabsSlice.actions;
export default tabsSlice.reducer;
