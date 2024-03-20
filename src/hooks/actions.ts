import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { stepsActions } from '../store/hrSpace/steps.slice';
import { resultsActions } from '../store/hrSpace/results.slice';

const actions = {
  ...stepsActions,
  ...resultsActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
