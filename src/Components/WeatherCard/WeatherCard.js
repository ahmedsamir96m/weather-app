import React from "react";
import "./WeatherCard.css";
import Location from "../Location/Location";
const WeatherCard = (props) => {
  return (
    <div className="weatherCard">
      <Location />
      <img
        src="./images/cloud-cloudy.png"
        className="weatherCard--image"
        alt="An icon that represent current weather condition"
      />
      <span className="weatherCard--temperature h1Span">32 °C</span>
      <span className="weatherCard--condition h3Span">Clear</span>
    </div>
  );
};

export default WeatherCard;
