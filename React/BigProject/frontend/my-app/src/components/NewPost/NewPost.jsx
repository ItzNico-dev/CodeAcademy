import React, { useState } from 'react';
import { createNewPost } from '../../api-calls/posts';

export default function NewPost() {
  const [postBody, setPostBody] = useState('');

  function submitHandler(e) {
    e.preventDefault();
    createNewPost({
      body: postBody,
      userId: localStorage.getItem('loggedInUser'),
    });
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
