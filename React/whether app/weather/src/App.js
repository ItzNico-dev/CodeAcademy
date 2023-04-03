import './App.css';
import React, { useState } from 'react';
import CityForm from './components/CityForm';
import WeatherDisplay from './components/WeatherDisplay/WeatherDisplay';

function App() {
  const [temp, setTemp] = useState([]);
  return (
    <div>
      <CityForm setTemp={setTemp} />
      <WeatherDisplay temp={temp} />
    </div>
  );
}

export default App;
