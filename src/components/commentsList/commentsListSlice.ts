import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { fetchComments } from './commentsListAPI';
import { CommentProps } from './../comment/Comment';

export type Comments = CommentProps[];

export interface CommentsState {
  inputValue: string | null;
  activeButtons: string[];
  items: Comments;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CommentsState = {
  inputValue: null,
  activeButtons: [],
  items: [],
  status: 'idle',
};

export const getComments = createAsyncThunk(
  'comments/fetchComments',
  async (limit: number) => {
    const response = await fetchComments(limit);
    return response.data;
  },
);

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string | null>) => {
      state.inputValue = action.payload;
    },
    setActiveButton: (state, action: PayloadAction<string>) => {
      state.activeButtons.push(action.payload);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getComments.pending, state => {
        state.status = 'loading';
      })
      .addCase(getComments.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items.push(...action.payload);
      });
  },
});

export const selectComments = (state: RootState) => state.comments.items;

export default commentsSlice.reducer;
