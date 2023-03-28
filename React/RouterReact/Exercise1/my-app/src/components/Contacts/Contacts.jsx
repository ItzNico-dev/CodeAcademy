import React, { useState } from 'react';

export default function Contacts() {
  const [isMessageVisible, setIsMessageVisible] = useState(false);

  function submitHandler(event) {
    event.preventDefault();
    setIsMessageVisible(true);
  }

  return (
    <div>
      <p>Phone +37054862 Address: some street</p>
      <form onSubmit={submitHandler}>
        <label htmlFor='name'>name</label>
        <input type='text' id='name' /> <br />
        <label htmlFor='email'>email</label>
        <input type='email' id='email' /> <br />
        <label htmlFor='message'>message</label>
        <input type='text' id='message' /> <br />
        <button type='submit'>Submit</button>
      </form>

      <p style={{ display: isMessageVisible ? 'block' : 'none' }}>
        thanks for your message
      </p>
    </div>
  );
}
