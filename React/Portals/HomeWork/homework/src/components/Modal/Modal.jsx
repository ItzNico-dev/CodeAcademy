import React from 'react';
import ReactDom from 'react-dom';

const modalStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 1000,
  backgroundColor: 'red',
  padding: '1rem 3rem',
};

const backgroundStyles = {
  position: 'fixed',
  backgroundColor: 'rgba(0,0,0, 0.5)',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
};

export default function Modal({ open, closeModal }) {
  if (!open) {
    return null;
  }

  return ReactDom.createPortal(
    <>
      <div style={backgroundStyles}></div>
      <div style={modalStyle}>
        <h1>Modal</h1>
        <button onClick={closeModal}>close</button>
      </div>
    </>,
    document.getElementById('modal')
  );
}
