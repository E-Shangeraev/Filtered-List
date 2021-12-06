import React from 'react';
import * as S from './styled';
import {
  DisplayProps,
  FlexboxProps,
  GridProps,
  SpaceProps,
} from 'styled-system';

export type GroupProps = DisplayProps &
  FlexboxProps &
  GridProps &
  SpaceProps & {
    children: JSX.Element | JSX.Element[];
  };

export const Group = ({ children, ...props }: GroupProps) => {
  return (
    <S.Group {...props}>
      {React.Children.map(children, (child) => (
        <li>{child}</li>
      ))}
    </S.Group>
  );
};
