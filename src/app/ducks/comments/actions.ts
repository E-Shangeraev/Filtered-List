import { createAsyncThunk } from '@reduxjs/toolkit';
import { CommentsService } from 'app/services/comments';

export const fetchComments = createAsyncThunk(
  'comments/fetchComments',
  async (search: string) => {
    try {
      const { data, status } = await CommentsService.getMany(search);
      if (status === 200 && data) {
        return data;
      }
      return Error('При запросе данных произошла ошибка');
    } catch (error) {
      console.error(error);
    }
  },
);
