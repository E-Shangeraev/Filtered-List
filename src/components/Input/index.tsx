import React from 'react';
import * as S from './styled';

export type Props = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ ...props }: Props) => {
  return <S.Input {...props} />;
};
