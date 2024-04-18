import "./App.css";
import WeatherApp from "./Components/WeatherApp/WeatherApp";
import daySky from "../src/Assets/daySky.avif";
function App() {
  const backgroundImageStyle = {
    backgroundImage: `url(${daySky})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh", // Set the minimum height to cover the entire viewport
    backdropFilter: "blur(10px)",
  };
  return (
    <div className="App">
      <WeatherApp />
    </div>
  );
}

export default App;
