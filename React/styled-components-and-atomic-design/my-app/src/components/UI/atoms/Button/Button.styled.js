import styled from 'styled-components';

export const StylesButton = styled.button`
  background-color: red;
  color: yellow;
`;

export const StylesDiv = styled.div`
  background-color: blue p {
    color: ${(props) => (props.color ? props.color : 'white')};
  }

  &:hover {
    background-color: green;
  }
`;
