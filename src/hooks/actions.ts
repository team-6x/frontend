import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { stepsActions } from '../store/hrSpace/steps.slice';
import { resultsActions } from '../store/hrSpace/results.slice';
import { tabsActions } from '../store/hrSpace/tabs.slice';

const actions = {
  ...stepsActions,
  ...resultsActions,
  ...tabsActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
