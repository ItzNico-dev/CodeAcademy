import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './Button.styled';

export default function Button({ text, click }) {
  return (
    <div>
      <StyledButton onClick={click}>{text}</StyledButton>
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  click: PropTypes.func,
};
