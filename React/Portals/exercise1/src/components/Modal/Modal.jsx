import React from 'react';
import ReactDom, { createPortal } from 'react-dom';

const modalStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 1000,
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

export default function Modal({ children, isOpen, close }) {
  if (!isOpen) {
    return null;
  }

  return ReactDom.createPortal(
    <>
      <div onClick={close} style={backgroundStyles}></div>
      <div style={modalStyle}>
        <button onClick={close}>Close</button>
        {children}
      </div>
    </>,

    document.getElementById('modal')
  );
}
