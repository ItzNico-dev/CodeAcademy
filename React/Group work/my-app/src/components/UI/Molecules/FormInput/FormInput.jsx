import React, { forwardRef } from 'react';
import Label from '../../atoms/Label/Label';
import Input from '../../atoms/Input/Input';
import { StyledDiv } from './FormInput.styled';

export default forwardRef(function FormInput(props, ref) {
  const {
    labelText,
    name,
    helperText,
    startIcon,
    endIcon,
    onChange,
    value,
    hasIcon,
    type,
  } = props;

  return (
    <StyledDiv>
      <Label text={labelText} name={name} />
      <Input
        helperText={helperText}
        startIcon={startIcon}
        endIcon={endIcon}
        onChange={onChange}
        value={value}
        hasIcon={hasIcon}
        type={type}
        ref={ref}
      />
    </StyledDiv>
  );
});
