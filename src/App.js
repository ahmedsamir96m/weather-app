import React from "react";
import "./App.css";
import WeatherCard from "./Components/WeatherCard/WeatherCard";

function App() {
  const weatherData = async () => {
    const apiResponse = await fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=california&units=metric&appid=043a835a34904ba1bd34803d928b7700"
    );
    const jsonData = await apiResponse
      .json()
      .then((resp) => console.log(resp.name));
    return jsonData;
  };

  weatherData();

  return (
    <div className="App">
      <WeatherCard
        temperature="15"
        weatherCondition="Rainy"
        city="London"
        country="UK"
        iconImage="./images/Clear.png"
      />
      <WeatherCard
        temperature="35"
        weatherCondition="Dust"
        city="Cairo"
        country="EGY"
        iconImage="./images/Clear.png"
      />
      <WeatherCard
        temperature="18"
        weatherCondition="Clear"
        city="California"
        country="USA"
        iconImage="./images/Clear.png"
      />
      <WeatherCard
        temperature="5"
        weatherCondition="Tunderstorm"
        city="Saydne"
        country="AUS"
        iconImage="./images/Clear.png"
      />
    </div>
  );
}

export default App;
