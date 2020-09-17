import React from "react";
import styled from "styled-components";
import "./WeatherCard.css";
import Location from "../Location/Location";
import Icon from "../Icon/Icon";
import Condition from "../Condition/Condition";

const WeatherCard = (props) => {
  let HighBGColor, LowBGColor;

  let Weather = 0;
  let coldWeather = 0;

  if (props.temperature >= 18) {
    HighBGColor = (1 - (props.temperature - 18) / 42) * 255;
    LowBGColor = HighBGColor - 150;
    Weather = 255;
    coldWeather = 0;
  } else if (props.temperature < 18) {
    HighBGColor = (1 - (props.temperature - 2) / 42) * 255;
    LowBGColor = HighBGColor - 150;
    Weather = 0;
    coldWeather = 255;
  }
  const weatherCardStyles = {
    background: `linear-gradient(
      to top,
      rgb(${Weather}, ${HighBGColor}, ${coldWeather}),
      rgb(${Weather}, ${LowBGColor}, ${coldWeather})
    )`,
  };

  return (
    <div className="weatherCard" style={weatherCardStyles}>
      <Location city={props.city} country={props.country} />
      <Icon weatherCondition={props.weatherCondition} />
      <Condition
        weatherTemperature={props.temperature}
        weatherCondition={props.weatherCondition}
      />
    </div>
  );
};

export default WeatherCard;
