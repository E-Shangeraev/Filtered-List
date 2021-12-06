import styled from 'styled-components';
import { display, flexbox, grid, space } from 'styled-system';
import { GroupProps } from './index';

export const Group = styled('ul')<GroupProps>(display, flexbox, grid, space);
