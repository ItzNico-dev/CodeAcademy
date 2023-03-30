import React, { useState, useEffect } from 'react';
import { getAllPosts } from '../../api-calls/posts';
import Post from '../Post/Post';

export default function PostList({ posts, setPosts }) {
  useEffect(() => {
    const id = localStorage.getItem('loggedInUser');
    getAllPosts(id).then((data) => setPosts(data));
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post._id}
          body={post.body}
          id={post._id}
          setPosts={setPosts}
        />
      ))}
    </div>
  );
}
