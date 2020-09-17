import React from "react";
import "./App.css";
import WeatherCard from "./Components/WeatherCard/WeatherCard";

function App() {
  return (
    <div className="App">
      <WeatherCard temperature="60" />
      <WeatherCard temperature="30" />
      <WeatherCard temperature="23" />
      <WeatherCard temperature="17" />
      <WeatherCard temperature="10" />
      <WeatherCard temperature="5" />
      <WeatherCard temperature="-2" />
    </div>
  );
}

export default App;
