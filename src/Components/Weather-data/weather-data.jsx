import "../Weather-data/weather-data.scss";
import humidity_icon from "../../Assets/humidity.png";
import wind_icon from "../../Assets/wind.png";
import { useContext, useEffect, useState } from "react";
import { WeatherDataContext } from "../../context/weatherData.context";

import WeatherIcon from "../Weather_icon/weather_icon";

const WeatherData = () => {
  const { weatherData } = useContext(WeatherDataContext);

  const temperature = document.getElementsByClassName("weather-temp");
  const location = document.getElementsByClassName("weather-location");

  const humidity = document.getElementsByClassName("humidity-percentage");
  const wind = document.getElementsByClassName("wind-rate");

  useEffect(() => {
    if (weatherData === null) {
      return;
    } else {
      location[0].innerHTML = weatherData.name;
      humidity[0].innerHTML = weatherData.main.humidity + " %";
      wind[0].innerHTML = Math.floor(weatherData.wind.speed) + " km/h";
      temperature[0].innerHTML = Math.floor(weatherData.main.temp) + " °c";
    }
  }, [weatherData]);

  return (
    <>
      <WeatherIcon />
      <div className="weather-temp">24°c</div>
      <div className="weather-location"> Tasmania </div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percentage">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="wind-rate">18km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherData;
