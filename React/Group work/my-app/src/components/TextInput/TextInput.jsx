import React from 'react';

export default function TextInput({ value, type, placeholder, updateState }) {
  function inputHandler(event) {
    updateState(event.target.value);
  }

  return (
    <div>
      <input
        value={value}
        updateState={inputHandler}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}
