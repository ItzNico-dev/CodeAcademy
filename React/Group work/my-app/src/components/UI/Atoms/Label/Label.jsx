import React from 'react';
import PropTypes from 'prop-types';
import { StyledLabel } from './Label.styled';

export default function Label({ text, name }) {
  return <StyledLabel htmlFor={name}>{text}</StyledLabel>;
}

Label.propTypes = {
  text: PropTypes.string,
  name: PropTypes.string,
};
