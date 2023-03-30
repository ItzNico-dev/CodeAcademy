import React, { useState, useEffect } from 'react';

export default function List({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems());
    console.log('setting items');
  }, [getItems]);

  return (
    <div>
      {items.map((item) => {
        return <div key={item}>{item}</div>;
      })}
    </div>
  );
}
