import React, { useState } from 'react';

export default function MoodChecker() {
  const [message, setMessage] = useState('kaup jauciates');

  return (
    <div>
      <h2>Kaip jautiesi</h2>
      <button onClick={() => setMessage('viskas bus gerai')}>
        {'jauciuosi prastai :('}
      </button>
      <br />
      <button onClick={() => setMessage('tikiuosi greitai pasijausi gerai')}>
        jauciuosi normaliai : |
      </button>
      <br />
      <button onClick={() => setMessage('smagu, taip ir toliau')}>
        {'jauciuosi gerai :)'}
      </button>
    </div>
  );
}
