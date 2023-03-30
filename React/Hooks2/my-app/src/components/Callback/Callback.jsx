import React, { useState, useCallback } from 'react';
import List from '../List/List';

export default function Callback() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(true);


  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  });

  return (
    <div>
      <input
        type='number'
        value={number}
        onChange={(e) => setNumber(+e.target.value)}
      />
      <br />
      <button
        style={{ backgroundColor: dark ? 'darkgray' : 'gray' }}
        onClick={() => setDark((prev) => !prev)}
      >
        toggle
      </button>
      <List getItems={getItems} />
    </div>
  );
}
