import React from "react";
import styled from "styled-components";
import "./WeatherCard.css";
import Location from "../Location/Location";
import Icon from "../Icon/Icon";
import Condition from "../Condition/Condition";

const WeatherCard = (props) => {
  // let HighBGColor, LowBGColor;

  const { temperature } = props;

  // let Weather = 0;
  // let coldWeather = 0;

  // if (temperature >= 18) {
  //   HighBGColor = (1 - (temperature - 18) / 42) * 255;
  //   LowBGColor = HighBGColor - 200;
  //   Weather = 255;
  //   coldWeather = 0;
  // } else if (temperature < 18) {
  //   HighBGColor = (1 - (temperature - 2) / 42) * 255;
  //   LowBGColor = HighBGColor - 150;
  //   Weather = 0;
  //   coldWeather = 255;
  // }

  let baseColor = null;

  temperature > 18 ? (baseColor = "red") : (baseColor = "blue");

  let bgColor = null;

  if (temperature <= 18 && temperature >= 12) {
    bgColor = "#89CFEF";
  } else if (temperature <= 11 && temperature >= 5) {
    bgColor = "#0C71E0";
  } else if (temperature <= 4) {
    bgColor = "#0859C6";
  } else if (temperature >= 19 && temperature <= 24) {
    bgColor = "#FF872C";
  } else if (temperature >= 25 && temperature <= 29) {
    bgColor = "#FE612C";
  } else if (temperature >= 30 && temperature <= 34) {
    bgColor = "#FD3A2D";
  } else if (temperature >= 35) {
    bgColor = "#F11D28";
  }
  const weatherCardStyles = {
    background: `linear-gradient(${bgColor}, ${baseColor})`,
  };

  return (
    <div className="weatherCard" style={weatherCardStyles}>
      <Location city={props.city} country={props.country} />
      <Icon iconImage={props.iconImage} />
      <Condition
        weatherTemperature={temperature}
        weatherCondition={props.weatherCondition}
      />
    </div>
  );
};

export default WeatherCard;
