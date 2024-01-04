import { useContext, useEffect, useState } from "react";
import { WeatherDataContext } from "../../context/weatherData.context";
import clear_icon from "../../Assets/clear.png";
import cloud_icon from "../../Assets/cloud.png";
import drizzle_icon from "../../Assets/drizzle.png";
import rain_icon from "../../Assets/rain.png";
import snow_icon from "../../Assets/snow.png";

const WeatherIcon = () => {
  const [wicon, setWicon] = useState(cloud_icon);
  const { weatherData } = useContext(WeatherDataContext);

  useEffect(() => {
    if (weatherData === null) {
      setWicon(clear_icon);
      return;
    }

    // Map weather icon codes to corresponding images
    const iconMap = {
      "01d": clear_icon,
      "01n": clear_icon,
      "02d": cloud_icon,
      "02n": cloud_icon,
      "03d": drizzle_icon,
      "03n": drizzle_icon,
      "04d": drizzle_icon,
      "04n": drizzle_icon,
      "09d": rain_icon,
      "09n": rain_icon,
      "10d": rain_icon,
      "10n": rain_icon,
      "13d": snow_icon,
      "13n": snow_icon,
    };

    // Set the appropriate weather icon based on weatherData
    const weatherIcon = iconMap[weatherData.weather[0].icon] || clear_icon;
    setWicon(weatherIcon);
  }, [weatherData]);

  return (
    <div className="weather-image">
      <img src={wicon} alt="" />
    </div>
  );
};

export default WeatherIcon;
