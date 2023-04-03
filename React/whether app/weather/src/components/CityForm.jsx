import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HOST = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '2d96d64425dca1d6eda00d942a281c0d';

export default function CityForm({ setTemp }) {
  const [city, setCity] = useState('');
  const [coordinates, setCoordinates] = useState([]);
  const [doesCityExist, setDoesCityExist] = useState(false);

  useEffect(() => {
    if (coordinates.lat && coordinates.lng && coordinates.long) {
      axios
        .get(HOST, {
          params: {
            lat: coordinates.lat,
            long: coordinates.lng,
            appid: API_KEY,
            units: 'metric',
          },
        })
        .then((response) => {
          setTemp(response.data.main);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [coordinates, setTemp]);

  function submitHandler(event) {
    event.preventDefault();
    axios
      .get(HOST, {
        params: {
          q: city,
          appid: API_KEY,
          units: 'metric',
        },
      })
      .then((response) => {
        setTemp(response.data.main);
        setDoesCityExist(false);
      })
      .catch((error) => {
        if (error.response.status === 404) {
          setDoesCityExist(true);
        } else {
          console.log(error);
        }
      });
  }

  function currentLocationHandler(e) {
    e.preventDefault();
    navigator.geolocation.getCurrentPosition((response) => {
      setCoordinates({
        lat: response.coords.latitude,
        long: response.coords.longitude,
      });
    });
  }

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor='city'>City </label>
      <input type='text' id='city' onChange={(e) => setCity(e.target.value)} />
      <br />
      <button type='submit'>Submit</button>
      <button type='something' onClick={currentLocationHandler}>
        Current Location
      </button>
      <p style={{ display: doesCityExist ? 'block' : 'none' }}>
        THis city does not exist
      </p>
    </form>
  );
}
