import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: '',
  search: '',
};

export const programsSlice = createSlice({
  name: 'programs',
  initialState,
  reducers: {
    setStatus: (state, action) => {
      return {
        ...state,
        status: action.payload.status,
      };
    },
  },
});

export const programsActions = programsSlice.actions;
export const programsReducer = programsSlice.reducer;
