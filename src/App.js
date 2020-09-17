import React from "react";
import "./App.css";
import WeatherCard from "./Components/WeatherCard/WeatherCard";

function App() {
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
