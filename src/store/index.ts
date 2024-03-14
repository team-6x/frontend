import { configureStore } from '@reduxjs/toolkit';
import { api } from './hrSpace/hrSpace.api';
import { programsReducer } from './hrSpace/programs.slice';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    programs: programsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
