import { configureStore } from '@reduxjs/toolkit';
import { hrSpaceApi } from './hrSpace/hrSpace.api';
import { hhApi } from './hrSpace/hh.api';
import { stepsReducer } from './hrSpace/steps.slice';
import { resultsReducer } from './hrSpace/results.slice';
import { tabsReducer } from './hrSpace/tabs.slice';

export const store = configureStore({
  reducer: {
    [hrSpaceApi.reducerPath]: hrSpaceApi.reducer,
    [hhApi.reducerPath]: hhApi.reducer,
    steps: stepsReducer,
    results: resultsReducer,
    tabs: tabsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(hrSpaceApi.middleware, hhApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
