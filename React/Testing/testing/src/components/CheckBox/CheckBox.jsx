import React from 'react';

export default function ChatBox() {
  return (
    <div>
      <label htmlFor='checkbox'>Checkbox</label>
      <input
        type='checkbox'
        id='checkbox'
        checked={true}
        onChange={(e) => console.log(e.target.value.checked)}
      />
    </div>
  );
}
