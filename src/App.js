import React from "react";
import "./App.css";
import WeatherCard from "./Components/WeatherCard/WeatherCard";

function App() {
  return (
    <div className="App">
      <WeatherCard temperature="35" />
    </div>
  );
}

export default App;
