import React, { useState } from 'react';
import TextInput from '../TextInput/TextInput';
import Label from '../Label/Label';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  function onsubmitHandler(e) {
    e.preventDefault();
    return;
  }

  return (
    <form onSubmit={onsubmitHandler}>
      <Label name='Name' />
      <TextInput changeCurrent={setName} type='text' placeholder='Some Text' />
      <Label name='Username' />
      <TextInput
        changeCurrent={setUsername}
        type='text'
        placeholder='Some Text'
      />
      <Label name='Email' />
      <TextInput
        changeCurrent={setEmail}
        type='email'
        placeholder='Some Text'
      />
      <Label name='Subject' />
      <select>
        <option value='option1'>Option 1</option>
        <option value='option2'>Option 2</option>
        <option value='option3'>Option 3</option>
      </select>
      <Label name='' />
      <textarea />
      <br />
      <input type='checkbox' id='check' />
      <label htmlFor='check'>I agree to the terms and conditions</label>
      <br />
      <Button name='Submit' type='submit' />
      <Button name='Cancel' type='reset' />
    </form>
  );
}


ContactForm.defaultProps = {
  name: '',
  username: '',
  email: '',
};
