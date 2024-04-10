import { bindActionCreators } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { inputsFormActions } from '../store/hrSpace/inputsForm.slice';
import { tabsActions } from '../store/hrSpace/tabs.slice';
import { labelsActions } from '../store/hrSpace/labels.slice';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

const actions = { ...inputsFormActions, ...tabsActions, ...labelsActions };
export const useActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(actions, dispatch);
};
