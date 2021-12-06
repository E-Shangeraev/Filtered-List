import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducer';
import { AppDispatch } from '../../store/store';
import * as actions from './actions';

export const useComments = () => {
  const dispatch: AppDispatch = useDispatch();
  const state = useSelector((state: RootState) => state.comments);

  const fetchComments = (search: string) => {
    return dispatch(actions.fetchComments(search));
  };

  return {
    state,
    fetchComments,
  };
};
