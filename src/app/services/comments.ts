import { apiGet } from './connect';
import { ItemsResult } from '../types/api.d';
import { Comment } from '../types/comments.d';

class CommentsServiceFactory {
  public getMany = async (search: string) => {
    const { data, status } = await apiGet<ItemsResult<Comment>>(
      `/comments${search}`,
    );
    return { data, status };
  };
}

export const CommentsService = new CommentsServiceFactory();
