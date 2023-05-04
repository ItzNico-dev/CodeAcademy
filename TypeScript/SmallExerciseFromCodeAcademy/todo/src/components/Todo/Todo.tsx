import React, { useState } from 'react';

type TodoProps = {
  text: string;
  onDelete: () => void;
};

export default function Todo({ text, onDelete }: TodoProps) {
  const [completed, setCompleted] = useState<boolean>(false);

  function handleChange() {
    setCompleted((prev) => !prev);
  }

  return (
    <div>
      <label htmlFor='check'>Check</label>
      <input type='checkbox' id='check' onChange={handleChange} />

      <span style={{ textDecoration: completed ? 'line-through' : '' }}>
        {text}
      </span>

      <button onClick={onDelete}>Delete</button>
    </div>
  );
}
