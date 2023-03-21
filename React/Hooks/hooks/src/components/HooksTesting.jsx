import React, { useState, useEffect } from 'react';

export default function HooksTesting() {
  const [text, setText] = useState('');

  useEffect(() => {
    console.log('useEffect');
  }, []);
  return (
    <div>
      <h1>{text}</h1>
      <button onClick={() => setText('Hello')}>Hello</button>
      <button onClick={() => setText('Bye')}>Bye</button>
    </div>
  );
}
