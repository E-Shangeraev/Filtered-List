import React from 'react';
import * as S from './styled';

export type Props = React.LabelHTMLAttributes<HTMLLabelElement>;

export const Label = ({ children, ...props }: Props) => {
  return <S.Label {...props}>{children}</S.Label>;
};
