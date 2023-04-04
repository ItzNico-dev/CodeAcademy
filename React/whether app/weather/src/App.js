import './App.css';
import React, { useState } from 'react';
import CityForm from './components/CityForm/CityForm';
import WeatherDisplay from './components/WeatherDisplay/WeatherDisplay';

function App() {
  const [temp, setTemp] = useState([]);
  const [lastUpdated, setLastUpdated] = useState('');
  const [lastServerUpdate, setLastServerUpdate] = useState('');

  return (
    <div>
      <CityForm
        setTemp={setTemp}
        setLastUpdated={setLastUpdated}
        setLastServerUpdate={setLastServerUpdate}
      />
      <WeatherDisplay
        temp={temp}
        date={lastUpdated}
        lastServerUpdate={lastServerUpdate}
      />
    </div>
  );
}

export default App;
