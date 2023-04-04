import React from 'react';

export default function SignInForm() {
  return (
    <form>
      <label htmlFor='email'>Email</label>
      <input type='email' id='email' /> <br />
      <label htmlFor='password'>Password</label>
      <input type='password' id='password' /> <br />
      <button>Submit</button>
    </form>
  );
}
