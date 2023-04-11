import React from 'react';

export default function Counter1({ count, increment }) {
  return (
    <div>
      <button style={{ backgroundColor: 'green' }} onClick={increment}>
        {count}
      </button>
    </div>
  );
}
