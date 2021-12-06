import { createSlice, AnyAction, PayloadAction } from '@reduxjs/toolkit';
import * as actions from './actions';
import { Comment } from '../../types/comments';

const SLICE_NAME = 'comments';

type InitialState = {
  loading: boolean;
  items: Comment[];
};

export const initialState: InitialState = {
  loading: true,
  items: [],
};

const isPendingAction = (action: AnyAction): action is AnyAction =>
  action.type.startsWith(`${SLICE_NAME}/`) && action.type.endsWith('/pending');

const isRejectedAction = (action: AnyAction): action is AnyAction =>
  action.type.startsWith(`${SLICE_NAME}/`) && action.type.endsWith('/rejected');

const isFulFilledAction = (action: AnyAction): action is AnyAction =>
  action.type.startsWith(`${SLICE_NAME}/`) &&
  action.type.endsWith('/fulfilled');

const commentsSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: ({ addCase, addMatcher }) => {
    addCase(
      actions.fetchComments.fulfilled.type,
      (state, action: PayloadAction<Comment[]>) => {
        state.items = action.payload;
      },
    );
    addMatcher(
      (action) => isPendingAction(action),
      (state) => {
        state.loading = true;
      },
    );
    addMatcher(
      (action) => isRejectedAction(action) || isFulFilledAction(action),
      (state) => {
        state.loading = false;
      },
    );
  },
});

export default commentsSlice.reducer;
