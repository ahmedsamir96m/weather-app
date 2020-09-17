import React from "react";
import styled from "styled-components";
import "./Icon.css";

function Icon(props) {
  let iconImage = "";
  switch (props.weatherCondition) {
    case "Clouds":
      iconImage = `./images/Clouds.png`;
      break;
    case "Clear":
      iconImage = `./images/Clear.png`;
      break;
    case "Haze":
      iconImage = `./images/Haze-2x.png`;
      break;
    case "Hail":
      iconImage = `./images/Hail-2x.png`;
      break;
    case "Fog":
      iconImage = `./images/Fog-2x.png`;
      break;
    case "Tornado":
      iconImage = `./images/Tornado-2x.png`;
      break;
    case "Dust":
      iconImage = `./images/Dust-2x.png`;
      break;
    case "Mist":
      iconImage = `./images/Fog-2x.png`;
      break;
    case "Snow":
      iconImage = `./images/Snow-2x.png`;
      break;
    case "Rain":
      iconImage = `./images/Rain-2x.png`;
      break;
    case "Drizzle":
      iconImage = `./images/Drizzle-2x.png`;
      break;
    case "Thunderstorm":
      iconImage = `./images/Severe Thunderstorm-2x.png`;
      break;
    default:
      iconImage = `./images/Fog-2x.png`;
      break;
  }
  return (
    <div>
      <img
        className="weatherCard--image"
        alt="An icon that represent current weather condition"
        src={iconImage}
      />
    </div>
  );
}

export default Icon;
