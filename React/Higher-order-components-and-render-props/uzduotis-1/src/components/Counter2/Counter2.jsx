import React, { useState } from 'react';

export default function Counter2() {
  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter((prev) => prev + 1);
  }

  return (
    <div>
      <button style={{ backgroundColor: 'blue' }} onClick={incrementCounter}>
        {counter}
      </button>
    </div>
  );
}
