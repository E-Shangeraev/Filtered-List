import React from 'react';
import { StyledProps } from 'styled-components';
import * as S from './styled';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  StyledProps<any> & {
    active: boolean;
  };

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  active = false,
  ...props
}) => {
  return (
    <S.Button type="button" onClick={onClick} {...props} $active={active}>
      {children}
    </S.Button>
  );
};
