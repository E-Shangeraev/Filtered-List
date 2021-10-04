import React from 'react';

import styles from './Comment.module.scss';

export interface CommentProps {
  name: string;
  email: string;
  body: string;
}

const Comment: React.FC<CommentProps> = ({ name, email, body }) => {
  return (
    <div className={styles.comment}>
      <h3 className={styles.name}>{name}</h3>
      <span className={styles.email}>{email}</span>
      <p className={styles.body}>{body}</p>
    </div>
  );
};

export default Comment;
