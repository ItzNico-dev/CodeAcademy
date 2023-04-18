import React from 'react';
import useFormInput from '../Hooks/useFormInput';

export default function Form() {
  const name = useFormInput('');
  const email = useFormInput('');

  function submitHandler(e) {
    e.preventDefault();
    console.log(name.value);
    console.log(email.value);
  }
  return (
    <form>
      <label htmlFor='name'>name</label>
      <input type='text' id='name' {...name} /> <br />
      <label htmlFor='email'>name</label>
      <input type='email' id='email' {...email} /> <br />
      <button type='submit'>submit</button>
    </form>
  );
}
