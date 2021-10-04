import React, { useEffect, useState } from 'react';
import Comment, { CommentProps } from '../comment/Comment';

type CommentsState = CommentProps[];

const CommentsList: React.FC = () => {
  const [comments, setComments] = useState<CommentsState>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments?_limit=20')
      .then(response => response.json())
      .then(setComments);
  }, []);

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
