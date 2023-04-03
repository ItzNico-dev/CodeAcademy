import React from 'react';

export default function WeatherDisplay({ temp }) {
  return (
    <div>
      <p>
        Current Temperature {temp.temp}
        <br />
        Feels Like {temp.feels_like}
        <br />
        Min Temperature {temp.temp_min}
        <br />
        Max Temperature {temp.temp_max}
        <br />
      </p>
    </div>
  );
}
