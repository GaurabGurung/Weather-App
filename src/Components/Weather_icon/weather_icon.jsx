import cloud_icon from "../../Assets/cloud.png";
import drizzle_icon from "../../Assets/drizzle.png";
import rain_icon from "../../Assets/rain.png";
import snow_icon from "../../Assets/snow.png";

const WeatherIcon = () => {
  return (
    <div className="weather-image">
      <img src={cloud_icon} alt="" />
    </div>
  );
};

export default WeatherIcon;
