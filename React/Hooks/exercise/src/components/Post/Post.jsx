import React from 'react';

export default function Post(props) {
  const { title, body } = props;
  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}
