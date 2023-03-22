import React, { useRef } from 'react';

export default function Form() {
  const inputRef = useRef(null);

  function handleClick() {
    console.log(inputRef.current);
    inputRef.current.focus();
    inputRef.current.value = 'Hello';
  }

  return (
    <>
      <input type='text' ref={inputRef} />
      <button onClick={handleClick}>Focus Input</button>
    </>
  );
}
