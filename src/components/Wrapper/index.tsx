import React from 'react';
import * as S from './styled';

export type WrapperType = {
  children: JSX.Element | JSX.Element[] | React.ReactNode | React.ReactNode[];
};

export const Wrapper = ({ children }: WrapperType) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};
