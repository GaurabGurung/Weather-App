import "../search-bar/search-bar.scss";
import search_icon from "../../Assets/search.png";
import { useContext } from "react";
import { WeatherDataContext } from "../../context/weatherData.context";

const SearchBar = ({ api_key }) => {
  const { setWeatherData } = useContext(WeatherDataContext);
  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value === "") {
      return 0;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
    let response = await fetch(url);
    let data = await response.json();

    setWeatherData(data);
  };
  return (
    <div className="top-bar">
      <input type="text" className="cityInput" placeholder="Search" />
      <div className="search-icon" onClick={() => search()}>
        <img src={search_icon} alt="" />
      </div>
    </div>
  );
};

export default SearchBar;
