import React from 'react';
import * as S from './styled';

export type VisuallyHiddenType = {
  children: JSX.Element | JSX.Element[] | React.ReactNode | React.ReactNode[];
};

export const VisuallyHidden = ({ children }: VisuallyHiddenType) => {
  return <S.VisuallyHidden>{children}</S.VisuallyHidden>;
};
