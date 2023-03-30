import React from 'react';

export default function Item({ price, description, name }) {
  return (
    <div>
      <h5>{name}</h5>
      <p>{description}</p>
      <p>{price} eu</p>
    </div>
  );
}
