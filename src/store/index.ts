import { configureStore } from '@reduxjs/toolkit';
import { hrSpaceApi } from './hrSpace/hrSpace.api';
import { hhApi } from './hrSpace/hh.api';
import { stepsReducer } from './hrSpace/steps.slice';

export const store = configureStore({
  reducer: {
    [hrSpaceApi.reducerPath]: hrSpaceApi.reducer,
    [hhApi.reducerPath]: hhApi.reducer,
    steps: stepsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(hrSpaceApi.middleware, hhApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
