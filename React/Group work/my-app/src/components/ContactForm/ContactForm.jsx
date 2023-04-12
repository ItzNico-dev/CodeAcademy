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
    if (name.length < 6 || username.length < 6) {
      alert('Name and username must be at least 6 characters long');
      return;
    }
    console.log(name, username, email);
  }

  return (
    <form onSubmit={onsubmitHandler}>
      <Label name='Name' />
      <TextInput updateState={setName} type='text' placeholder='Some Text' />
      <Label name='Username' />
      <TextInput
        updateState={setUsername}
        type='text'
        placeholder='Some Text'
      />
      <Label name='Email' />
      <TextInput updateState={setEmail} type='email' placeholder='Some Text' />
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

ContactForm.propTypes = {
  name: PropTypes.shape({
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }),
  username: PropTypes.shape({
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }),
  email: PropTypes.shape({
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }),
};
ContactForm.defaultProps = {
  name: '',
  username: '',
  email: '',
};
