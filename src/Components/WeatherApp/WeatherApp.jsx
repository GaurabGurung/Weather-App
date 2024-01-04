import React, { useContext, useEffect, useState } from "react";
import "./WeatherApp.scss";

import dayBackground from "../../Assets/daySky.avif";
import nightBackground from "../../Assets/nightSky.avif";
import SearchBar from "../search-bar/search-bar";
import WeatherData from "../Weather-data/weather-data";
import { WeatherDataContext } from "../../context/weatherData.context";

const WeatherApp = () => {
  let api_key = "61bd27c8f20ee6ef5a1530e988ad9d35";
  const { weatherData } = useContext(WeatherDataContext);
  const [background, setBackground] = useState(dayBackground);
  const style1 = { backgroundImage: `url(${background})` };

  useEffect(() => {
    if (weatherData?.weather[0]?.icon?.includes("d")) {
      setBackground(dayBackground);
    } else {
      setBackground(nightBackground);
    }
  }, [weatherData]);

  return (
    <div className="container" style={style1}>
      <SearchBar api_key={api_key} />
      <WeatherData />
    </div>
  );
};

export default WeatherApp;
