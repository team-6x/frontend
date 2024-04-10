import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { hrSpaceApi } from './hrSpace/hrSpace.api';
import { hhApi } from './hrSpace/hh.api';
import inputsFormReducer from './hrSpace/inputsForm.slice';
import tabsReducer from './hrSpace/tabs.slice';

const rootReducer = combineReducers({
  [hrSpaceApi.reducerPath]: hrSpaceApi.reducer,
  [hhApi.reducerPath]: hhApi.reducer,
  inputsForm: inputsFormReducer,
  tabs: tabsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(hrSpaceApi.middleware, hhApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
