import React from 'react';

export default function Paragraph({ isVisible, toggle }) {
  return (
    <div>
      <button onClick={toggle}>Toggle visibility</button>
      <p style={{ display: isVisible ? 'block' : 'none' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure placeat
        eveniet autem in repellendus maxime magni, doloremque vitae? A quisquam
        nobis doloribus aspernatur pariatur praesentium rem dolorum,
        perspiciatis obcaecati saepe!
      </p>
    </div>
  );
}
