import "../Weather-data/weather-data.scss";
import humidity from "../Assets/humidity.png";
import wind_icon from "../Assets/wind.png";

const WeatherData = () => {
  return (
    <div className="data-container">
      <div className="element">
        <img src={humidity} alt="" className="icon" />
        <div className="data">
          <div className="humidity-percentage">64%</div>
          <div className="text">Humidity</div>
        </div>
      </div>
      <div className="element">
        <img src={wind_icon} alt="" className="icon" />
        <div className="data">
          <div className="humidity-percentage">18km/h</div>
          <div className="text">Wind Speed</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherData;
