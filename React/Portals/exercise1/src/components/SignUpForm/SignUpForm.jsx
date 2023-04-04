import React from 'react';

export default function SignUpForm() {
  return (
    <form>
      <label htmlFor='name'>Name</label>
      <input type='text' id='name' /> <br />
      <label htmlFor='email'>Email</label>
      <input type='email' id='email' /> <br />
      <label htmlFor='password'>Password</label>
      <input type='password' id='password' /> <br />
      <button>Submit</button>
    </form>
  );
}
