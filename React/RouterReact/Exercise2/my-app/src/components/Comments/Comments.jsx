import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HOST = 'https://jsonplaceholder.typicode.com/comments';

export default function Comments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get(HOST).then((response) => {
      setComments(response.data).catch((error) => console.log(error));
    });
  });
  return (
    <div key={comments.id}>
      {comments.map((comment) => {
        return (
          <div>
            <h5>{comment.name}</h5>
            <h5>{comment.email}</h5>
          </div>
        );
      })}
    </div>
  );
}
