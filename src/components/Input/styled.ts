import styled from 'styled-components';

export const Input = styled.input`
  padding: 11px 15px;
  font-size: 18px;
  color: $primary-font-color;
  border: 1px solid #cacaca;
  border-radius: 3px;
  transition: linear 0.15s;

  &::placeholder {
    color: #999;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 2px 3px rgb(119, 149, 255);
  }
`;
