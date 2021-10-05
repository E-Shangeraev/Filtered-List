import axios from 'axios';
import { Comments } from './commentsListSlice';

const URL = 'https://jsonplaceholder.typicode.com/comments?_limit=';

export function fetchComments(limit: number) {
  return axios.get<Comments>(URL + limit);
}
