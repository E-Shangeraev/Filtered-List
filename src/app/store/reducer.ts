import { combineReducers } from 'redux';
import comments from '../ducks/comments';

const rootReducer = combineReducers({ comments });
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
