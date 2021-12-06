import React, { useEffect } from 'react';
import { Comments } from './component';
import { useComments } from 'app/ducks/comments';

export const CommentsContainer = () => {
  const { state, fetchComments } = useComments();

  useEffect(() => {
    fetchComments('?_limit=20');
  }, []);

  return <Comments {...state} />;
};
