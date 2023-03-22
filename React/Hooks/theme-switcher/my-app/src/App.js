import React, { useState } from 'react';
import './App.css';
import FirstComponent from './components/FirstComponent/FirstComponent';
import SecondComponent from './components/SecondComponent/SecondComponent';

const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

export const themesContext = React.createContext();
export const darkModeContext = React.createContext();

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  function onClickHandler() {
    setIsDarkMode((prev) => !prev);
  }

  return (
    <div>
      <darkModeContext.Provider>
        <themesContext.Provider>
          <FirstComponent />
          <SecondComponent />
          <button onClick={onClickHandler}> click </button>
        </themesContext.Provider>
      </darkModeContext.Provider>
    </div>
  );
}

export default App;
