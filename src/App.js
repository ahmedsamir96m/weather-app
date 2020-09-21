import React from "react";
import "./App.css";
import WeatherController from "./Components/WeatherController/WeatherController";

function App() {
  return (
    <div className="App">
      <WeatherController location="tokyo" />
    </div>
  );
}

export default App;
