import React from "react";
import "./WeatherApp.scss";

import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";

import SearchBar from "../search-bar/search-bar";
import WeatherData from "../Weather-data/weather-data";

const WeatherApp = () => {
  let api_key = "61bd27c8f20ee6ef5a1530e988ad9d35";

  return (
    <div className="container">
      <SearchBar api_key={api_key} />
      <div className="weather-image">
        <img src={cloud_icon} alt="" />
      </div>
      <div className="weather-temp">24°c</div>
      <div className="weather-location"> Tasmania </div>
      <WeatherData />
    </div>
  );
};

export default WeatherApp;
