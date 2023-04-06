import React, { useRef } from 'react';
import AudioSource from '../AudioSource/AudioSource';

export default function AudiooControls() {
  const songPath = `${process.env.PUBLIC_URL}/audio/song.mp3`;
  const audioRef = useRef(null);
  return (
    <div>
      <AudioSource source={songPath} ref={audioRef} />
      <button onClick={() => audioRef.current.play()}>Play</button>
      <button onClick={() => audioRef.current.pause()}>Pause</button>
    </div>
  );
}
