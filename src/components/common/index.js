import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.col ? 'column' : 'row')};
`;

export const A = styled.a`
  float: right;
  text-decoration-line: none;
  padding: 5px;
`;

export const Input = styled.input`
  padding: 10px;
  margin: 5px 0;
`;

export const BigButton = styled.button`
  padding: 10px;
  margin: 5px 0;
`;

export const Li = styled.li`
  list-style-type: none;
`;
