import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((data) => data.json())
        .then((data) => {
          setPosts(data);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }, 1000);
  }, []);

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  return (
    <>
      {posts.length === 0 ? (
        <h3>Loading...</h3>
      ) : (
        posts.map((post) => {
          return <Post key={post.id} body={post.body} title={post.title} />;
        })
      )}
    </>
  );
}
