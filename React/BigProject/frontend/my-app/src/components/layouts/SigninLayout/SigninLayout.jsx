import React, { useState } from 'react';
import { signInRequest } from '../../../api-calls/auth';

export default function SigninLayout(e) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isWrongCredentials, setIsWrongCredentials] = useState('');

  async function submitHandler() {
    await signInRequest();
    const userId = await signInRequest({ email, password });
    if (userId) {
      localStorage.setItem('loggedInUser', userId);
    } else {
      setIsWrongCredentials(true);
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor='email'>Email</label>
      <input
        type='email'
        name='email'
        id='email'
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label htmlFor='password'>Password</label>
      <input
        type='password'
        name='password'
        id='password'
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button>Sign In</button>
      <h3 style={{ display: isWrongCredentials ? 'block' : 'none' }}>
        Wrong password or email
      </h3>
    </form>
  );
}
