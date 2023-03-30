import React, { useState, useMemo } from 'react';

export default function Memo() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(true);

  const square = useMemo(() => {
    return heavyCalculation();
  }, [number]);

  function heavyCalculation() {
    for (let index = 0; index < 100000000; index++) {}
    return number * number;
  }

  return (
    <div>
      <input type='number' onChange={(e) => setNumber(+e.target.value)} />
      <br />
      <button
        style={{ backgroundColor: dark ? 'darkgray' : 'gray' }}
        onClick={() => setDark((prev) => !prev)}
      >
        toggle
      </button>
      {/* {heavyCalculations()} */}
      <br />
      {square}
    </div>
  );
}
