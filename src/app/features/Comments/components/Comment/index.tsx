import React from 'react';
import * as S from './styled';

export type CommentProps = {
  name: string;
  email: string;
  body: string;
};

export const Comment: React.FC<CommentProps> = ({ name, email, body }) => {
  return (
    <S.Comment>
      <S.Name>{name}</S.Name>
      <S.Email>{email}</S.Email>
      <S.Body>{body}</S.Body>
    </S.Comment>
  );
};
