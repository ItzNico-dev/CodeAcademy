import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  margin: ${(props) => (props.hasIcon ? '0 7px' : 0)};
  font-size: 16px;
`;

export const StyledInputWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  padding: 7px 10px;
  border-radius: 5px;

  i {
    color: #ccc;
    font-size: 14px;
  }
`;

export const StyledHelperText = styled.p`
  padding-top: 5px;
  font-size: 12px;
  color: red;
`;
