import React from 'react';

export default function TextInput({ value, type, placeholder, changeCurrent }) {
  function inputHandler(event) {
    changeCurrent(event.target.value);
  }

  return (
    <div>
      <input value={value} type={type} placeholder={placeholder} />
    </div>
  );
}
