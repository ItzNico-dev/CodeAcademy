import './App.css';
import React, { useState, useRef } from 'react';
import Display from './components/Display/Display.jsx';
import Controls from './components/Controls/Controls.jsx';
import { useEffect } from 'react';

export const TimeContext = React.createContext();

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timeRef = useRef();

  useEffect(() => {
    if (isRunning) {
      timeRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);

      return () => {
        clearInterval(timeRef.current);
      };
    }
  }, [isRunning]);

  return (
    <div>
      <TimeContext.Provider value={{ time, setIsRunning, setTime }}>
        <Display />
        <Controls />
      </TimeContext.Provider>
    </div>
  );
}

export default App;
