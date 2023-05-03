import React, { useContext } from 'react';
import { LoginContext } from '../../contexts/loginContext';
import axios from 'axios';

export default function Main() {
  const { permissions, token } = useContext(LoginContext);

  async function postSomething() {
    try {
      const response = await axios.post('http://localhost:4000/writeStuff', {
        token,
      });
      console.log('all is good');
    } catch (error) {
      console.log(error.message);
    }

    return (
      <div>
        {permissions.includes('read') && (
          <button onClick={postSomething}>Send</button>
        )}
      </div>
    );
  }
}
