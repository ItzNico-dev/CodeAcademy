import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from './Header.module.css';
import Modal from '../Modal/Modal';
import SignInForm from '../SignInForm/SignInForm';
import SignUpForm from '../SignUpForm/SignUpForm';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [formPicker, setFormPicker] = useState('');

  function signInButtonHandler() {
    setFormPicker('signIn');
    setIsOpen(true);
  }

  function signUpButtonHandler() {
    setFormPicker('signUp');
    setIsOpen(true);
  }

  function getForm() {
    if (formPicker === 'signIn') {
      return <SignInForm />;
    } else if (formPicker === 'signUp') {
      return <SignUpForm />;
    }
  }

  return (
    <>
      <header className={styles.header}>
        <h3>LOGO</h3>
        <nav>
          <Link to={'/'}>Home </Link>
          <Link to={'/about'}>About </Link>
          <button onClick={signInButtonHandler}>Sign In</button>
          <button onClick={signUpButtonHandler}>Sign Up</button>
        </nav>
      </header>
      <Modal isOpen={isOpen} close={() => setIsOpen(false)}>
        {getForm()}
      </Modal>
      <Outlet />
    </>
  );
}
