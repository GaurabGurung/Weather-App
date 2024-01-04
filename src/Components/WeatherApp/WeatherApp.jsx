import React, { useContext } from "react";
import "./WeatherApp.scss";

import SearchBar from "../search-bar/search-bar";
import WeatherData from "../Weather-data/weather-data";
import { WeatherDataContext } from "../../context/weatherData.context";

const WeatherApp = () => {
  let api_key = "61bd27c8f20ee6ef5a1530e988ad9d35";
  const {} = useContext(WeatherDataContext);

  return (
    <div className="container">
      <SearchBar api_key={api_key} />
      <WeatherData />
    </div>
  );
};

export default WeatherApp;
