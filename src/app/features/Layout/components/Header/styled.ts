import styled from 'styled-components';
import css from '@styled-system/css';

export const Header = styled('header')(
  css({
    pt: 12,
    pb: 5,
    textAlign: 'center',
  }),
);

export const Logo = styled('h1')(
  css({
    margin: 0,
    fontFamily: 'secondary',
    fontSize: 64,
    fontWeight: 700,
    lineHeight: 100,
  }),
);
