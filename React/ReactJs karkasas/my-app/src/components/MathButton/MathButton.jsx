import React, { useState } from 'react';
import PropTypes, { number } from 'prop-types';

export default function MathButton(props) {
  const { text, action, array, textOrNumber, header } = props;

  const [buttonText, setButtonText] = useState(text);

  function buttonHandler() {
    setButtonText(`the answer is ${action(...array)}`);
  }

  return <button onClick={buttonHandler}>{buttonText}</button>;
}

MathButton.propTypes = {
  text: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  array: PropTypes.array.isRequired,
  //   array: PropTypes.arrayOf(
  //     PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  //   ),
  //   textOrNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  //   person: PropTypes.shape({
  //     name: PropTypes.string,
  //     age: PropTypes.number,
  //   }),
  //! or exact ^^^
  //   something: PropTypes.any,
  //   header: PropTypes.node,
};
