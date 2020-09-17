import React from "react";
import styled from "styled-components";
import "./WeatherCard.css";
import Location from "../Location/Location";

const WeatherCard = (props) => {
  let hotHighBGColor = (1 - (props.temperature - 18) / 42) * 255;
  let hotLowBGColor = (150 - hotHighBGColor) * -1;

  const weatherCardStyles = {
    background: `linear-gradient(
      to top,
      rgb(255, ${hotHighBGColor}, 0),
      rgb(255, ${hotLowBGColor}, 0)
    )`,
  };

  return (
    <div className="weatherCard" style={weatherCardStyles}>
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
