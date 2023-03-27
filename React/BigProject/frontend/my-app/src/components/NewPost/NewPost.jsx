import React, { useState } from 'react';

export default function NewPost() {
  const [postBody, setPostBody] = useState('');

    function submitHandler(){

    }


  return (
    <form>
      <label htmlFor='body'>Post</label>
      <input
        type='text'
        id='body'
        onChange={(e) => setPostBody(e.target.value)}
      />
    </form>
  );
}
