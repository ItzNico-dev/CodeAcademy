import React from 'react';

export default function Article({ title, author, description, content }) {
  return (
    <div>
      <h1>{title}</h1>
      <h3>{author}</h3>
      <p>{description}</p>
      <p>{content}</p>
    </div>
  );
}
