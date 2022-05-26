import React from 'react';

function WeatherInfo(weather) {
  return (
    <div>
      <h1>{weather.name}</h1>
      <div>날씨: {weather.weather[0].main}</div>
      <div>날씨 설명: {weather.weather[0].description}</div>
      <div>풍속: {weather.name}</div>
      <div>일몰시간(UTC): {weather.sys.sunset}</div>
      <div>일몰시간(변환): </div>
    </div>
  );
}

export default WeatherInfo;
