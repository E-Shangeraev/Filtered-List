import styled from 'styled-components';
import { css } from '@styled-system/css';

export type StyledBtnProps = {
  $active: boolean;
};

export const Button = styled.button`
  padding: 10px 18px;
  min-width: 68px;
  font-size: 18px;
  background-color: ${(props: StyledBtnProps) =>
    props.$active ? 'black' : 'white'};
  color: ${(props: StyledBtnProps) => (props.$active ? 'white' : 'black')};
  border-radius: 3px;
  transition: linear 0.15s;
  cursor: pointer;
`;

// export const Button = styled('button')(
//   css({
//     padding: '10px 18px',
//     minWidth: '68px',
//     fontSize: '18px',
//     backgroundColor: '#fff',
//     borderRadius: '3px',
//     transition: 'linear 0.15s',
//     cursor: 'pointer',
//   }),
//   ($active) =>
//     $active &&
//     css({
//       color: 'white',
//       backgroundColor: 'black',
//     }),
// );
