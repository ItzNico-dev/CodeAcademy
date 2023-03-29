import React, { useState } from 'react';

export default function Contacts() {
  const [isMessageVisible, setIsMessageVisible] = useState(false);

  function submitHandler(e) {
    e.preventDefault();
    setIsMessageVisible(true);
  }

  return (
    <div>
      <p>
        Phone: +37032168416 <br />
        Address: Some street 10-20
      </p>
      <form onSubmit={submitHandler}>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' /> <br />
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' /> <br />
        <label htmlFor='message'>Message</label>
        <input type='text' id='message' /> <br />
        <button type='submit'>Submit</button>
      </form>

      <p style={{ display: isMessageVisible ? 'block' : 'none' }}>
        Thank you for your message
      </p>
    </div>
  );
}
