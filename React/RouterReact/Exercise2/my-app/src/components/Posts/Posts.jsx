import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HOST = 'https://jsonplaceholder.typicode.com/posts';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get(HOST).then((response) => setPosts(response.data));
  });
  return <div>
    {
      posts.map((post)=>{
        return <div>
          <h5>{post.title}</h5>
          <p>{post.body}</p>
        </div>
      })
    }
  </div>;
}
