import "../search-bar/search-bar.scss";
import search_icon from "../Assets/search.png";

const SearchBar = ({ api_key }) => {
  const search = () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value === "") {
      return 0;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
  };
  return (
    <div className="top-bar">
      <input type="text" className="cityInput" placeholder="Search" />
      <div className="search-icon" onClick={() => search}>
        <img src={search_icon} alt="" />
      </div>
    </div>
  );
};

export default SearchBar;
