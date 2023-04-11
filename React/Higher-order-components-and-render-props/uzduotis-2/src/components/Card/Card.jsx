import React from 'react';

export default function Card({ isVisible, toggle, header, source, bodyText }) {
  return (
    <div>
      <h1>{header}</h1>
      <button onClick={toggle}>Toggle visibility</button>
      <img src={source} style={{ display: isVisible ? 'block' : 'none' }} />
      <p>{bodyText}</p>
    </div>
  );
}
