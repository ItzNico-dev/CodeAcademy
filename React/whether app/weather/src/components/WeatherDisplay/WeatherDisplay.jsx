import React from 'react';

export default function WeatherDisplay({ temp, date, lastServerUpdate }) {
  return (
    <div>
      <p>
        Last Updated: {date} <br />
        Last Server Update: {lastServerUpdate} <br />
        Current Temperature: {temp.temp} <br />
        Feels Like: {temp.feels_like} <br />
        Min Temperature: {temp.temp_min} <br />
        Max Temperature: {temp.temp_max}
      </p>
    </div>
  );
}
