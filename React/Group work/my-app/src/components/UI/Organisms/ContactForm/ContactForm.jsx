import React, { useState, useEffect, useRef } from 'react';
import FormInput from '../../molecules/FormInput/FormInput';
import Button from '../../atoms/Button/Button';
import { StyledForm } from './ContactForm.styled';

// endIcon,

export default function ContactForm() {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [helperTexts, setHelperTexts] = useState({
    username: '',
    email: '',
  });

  const userNameRef = useRef(null);
  const emailRef = useRef(null);
  const isFirstTimeRef = useRef(true);

  useEffect(() => {
    validateInputs();
  }, [userName, email]);

  function validateInputs() {
    if (isFirstTimeRef.current) {
      return;
    }
    let userNameValid = true;
    let emailValid = true;

    if (userName.length < 6) {
      userNameValid = false;
    }

    if (!email.includes('@')) {
      emailValid = false;
    }
    if (userNameValid) {
      userNameRef.current.style.border = '1px solid green';
    } else {
      userNameRef.current.style.border = '1px solid red';
    }

    if (emailValid) {
      emailRef.current.style.border = '1px solid green';
    } else {
      emailRef.current.style.border = '1px solid red';
    }

    setHelperTexts({
      username: userNameValid ? '' : 'User Name is too short',
      email: emailValid ? '' : 'Please enter a valid email',
    });
  }

  function submitHandler(e) {
    e.preventDefault();
    isFirstTimeRef.current = false;
    validateInputs();
  }

  return (
    <StyledForm>
      <FormInput
        name={'name'}
        labelText={'Name'}
        type={'text'}
        value={name}
        onChange={setName}
        hasIcon={false}
      />
      <FormInput
        ref={userNameRef}
        helperText={helperTexts.username}
        name={'username'}
        labelText={'UserName'}
        type={'text'}
        value={userName}
        onChange={setUserName}
        startIcon={<i className='fa-solid fa-user'></i>}
        hasIcon={true}
        endIcon={
          helperTexts.username ? (
            <i className='fa-solid fa-xmark'></i>
          ) : (
            <i className='fa-solid fa-check'></i>
          )
        }
      />
      <FormInput
        ref={emailRef}
        helperText={helperTexts.email}
        name={'email'}
        labelText={'Email'}
        type={'email'}
        value={email}
        onChange={setEmail}
        startIcon={<i className='fa-solid fa-envelope'></i>}
        hasIcon={true}
        endIcon={
          helperTexts.email ? (
            <i className='fa-solid fa-xmark'></i>
          ) : (
            <i className='fa-solid fa-check'></i>
          )
        }
      />
      {/* { text, click } */}
      <Button text={'Submit'} click={submitHandler} />
      <Button text={'Cancel'} />
    </StyledForm>
  );
}
