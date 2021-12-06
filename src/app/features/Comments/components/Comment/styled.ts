import styled from 'styled-components';
import { css } from '@styled-system/css';

export const Comment = styled('div')(
  css({
    p: 6,
    backgroundColor: 'white',
    boxShadow: 'base',
    borderRadius: '5px',
  }),
);

export const Name = styled('h3')(
  css({
    m: 0,
    fontSize: [14, 16, 16, 18],
    fontWeight: 'bold',
    lineHeight: 100,
    textTransform: 'uppercase',
  }),
);

export const Email = styled('span')(
  css({
    display: 'inline-block',
    mb: '10px',
    fontSize: [12, 14, 14, 16],
    lineHeight: 100,
    color: 'd-grey',
  }),
);

export const Body = styled('p')(
  css({
    fontSize: [12, 14, 14, 16],
    color: 'black',
  }),
);
