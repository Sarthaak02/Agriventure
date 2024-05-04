import React, { useState } from 'react';
import axios from 'axios';

const API_KEY = '71994d895962ae5004657c529ff335a9'; // Replace with your actual API key

export default function Weather(){
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      setWeatherData(response.data);
    } catch (err) {
      setError('Error fetching weather data. Please try again.');
    }
  };

  const WeatherDisplay = ({ weatherData }) => {
    const { name, main, weather } = weatherData;
    const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}.png`;

    return (
      <div className=" flex flex-col justify-center mx-auto my-20 ">
        <h2 className='text-center text-4xl font-semibold'>{name}</h2>
        <img src={iconUrl} alt={weather[0].main} className='h-[100px] w-[100px] mx-auto'/>
        <p className='text-2xl'>
          Temperature: {(main.temp - 273.15).toFixed(2)}°C ({((main.temp - 273.15) * 9) / 5 + 32}°F) 
        </p>
        <p className='text-2xl pt-6'>Weather: {weather[0].main}</p>
      </div>
    );
  };

  return (
    <div className='bg-slate-100 h-[1015px] flex flex-col'>
        <div className="bg-white w-1/3 h-2/3 m-auto flex flex-col shadow-2xl">
          <h1 className='text-6xl font-thin text-teal-500 text-center pt-28'>Live Weather</h1>
          <form onSubmit={handleSearch} className='mt-12 mx-auto'>
            <input
              type="text"
              placeholder="Enter city name"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="mx-auto border  outline-none h-[60px] text-2xl p-4"
            />
            <button type="submit" className="h-[60px] px-2 py-4 "style={{  background: '#007bff', color: '#fff', border: 'none' }}>Search</button>
          </form>
          {error && <p className="error" style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
          {weatherData && <WeatherDisplay weatherData={weatherData} />}
      </div>
    </div>
  );
}; 
