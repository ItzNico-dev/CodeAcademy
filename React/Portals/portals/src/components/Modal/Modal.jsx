import React from 'react';
import ReactDom from 'react-dom';

export default function Modal({ isOpen, closeModal }) {
  if (!isOpen) {
    return null;
  }

  return ReactDom.createPortal(
    <div>
      <h3>this is our modal</h3>
      <button onClick={closeModal}>Close</button>
    </div>,
    document.getElementById('modal')
  );
}
