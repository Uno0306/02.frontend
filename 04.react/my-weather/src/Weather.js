import React from 'react';
import api from './api/api';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
// import WeatherInfo from './WeatherInfo';
import styled from 'styled-components';

const Input = styled.input`
  width: 300px;
`;

function Weather() {
  const [weather, setWeather] = useState([]);
  const [date, setDate] = useState('');
  const [name, setName] = useState('');

  const cityName = (e) => {
    console.log(e.target.value);
  };

  const search = () => {};

  useEffect(() => {
    const getWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=busan&appid=${api}`
        );

        // console.log(response.data);
        setWeather(response.data);
        // let getDate = new Date(response.data.sys.sunset * 1000);
        // setDate(getDate.toLocaleString());
        let getDate = new Intl.DateTimeFormat('en-KR', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }).format(response.data.sys.sunset * 1000);
        setDate(getDate);
      } catch (error) {
        console.log(error);
      }
    };
    getWeather();
  }, []);

  console.log(weather);

  //   const date = new Intl.DateTimeFormat('en-US', {
  //     year: 'numeric',
  //     month: '2-digit',
  //     day: '2-digit',
  //     hour: '2-digit',
  //     minute: '2-digit',
  //     second: '2-digit',
  //   }).format(weather.sys.sunset);

  return (
    <div>
      <Input
        type='text'
        placeholder='도시의 영어명을 입력해주세요'
        onChange={cityName}
      />
      <button onClick={search}>검색</button>
      {/* Object.keys(object).length */}
      {weather.length !== 0 ? (
        <div>
          <h1>{weather.name}</h1>
          <div>날씨: {weather.weather[0].main}</div>
          <div>날씨 설명: {weather.weather[0].description}</div>
          <div>풍속: {weather.wind.speed} m/s</div>
          <div>일몰시간(UTC): {weather.sys.sunset}</div>
          <div>일몰시간(변환): {date}</div>
        </div>
      ) : (
        ''
      )}
      {/* <WeatherInfo weather={weather} /> */}
    </div>
  );
}

export default Weather;
