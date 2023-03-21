import React, { useState, useEffect } from 'react';

export default function Container() {
  const [text, setText] = useState('posts');
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      fetch(`https://jsonplaceholder.typicode.com/${text}`)
        .then((res) => res.json())
        .then((res) => {
          setData(res);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 2000);
  }, [text]);

  return (
    <div>
      {text}
      <button onClick={() => setText('posts')}>Posts</button>
      <button onClick={() => setText('comments')}>Comments</button>
      <button onClick={() => setText('albums')}>Albums</button>
      {isLoading ? (
        <h1>Loading {text}...</h1>
      ) : (
        data.map((item) => {
          return <p key={item.id}>{JSON.stringify(item)}</p>;
        })
      )}
    </div>
  );
}
