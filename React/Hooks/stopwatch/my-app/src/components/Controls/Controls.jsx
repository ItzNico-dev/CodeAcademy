import React, { useContext } from 'react';
import { TimeContext } from '../../App';

export default function Controls() {
  const { time, setIsRunning } = useContext(TimeContext);

  function startTimer() {
    setIsRunning(true);
  }
  function pauseTimer() {
    setIsRunning(false);
  }
  function resetTime() {
    setIsRunning(false);
    
  }

  return (
    <>
      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={(resetTime(), setIsRunning(false))}>Reset</button>
    </>
  );
}
