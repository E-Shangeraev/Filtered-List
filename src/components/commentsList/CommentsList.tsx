import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { getComments, selectComments } from './commentsListSlice';
import Comment, { CommentProps } from '../comment/Comment';

export type Comments = CommentProps[];

const CommentsList: React.FC = () => {
  const dispatch = useAppDispatch();
  const comments = useAppSelector(selectComments);

  useEffect(() => {
    dispatch(getComments(20));
  }, [dispatch]);

  return (
    <div style={{ backgroundColor: '#e5e5e5' }}>
      <div className="wrapper">
        <ul>
          {comments.length > 0 &&
            comments.map(item => (
              <li key={item.name}>
                <Comment {...item} />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default CommentsList;
