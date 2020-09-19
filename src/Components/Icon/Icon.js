import React from "react";
import styled from "styled-components";
import "./Icon.css";

function Icon(props) {
  return (
    <div>
      <img
        className="weatherCard--image"
        alt="An icon that represent current weather condition"
        src={`http://openweathermap.org/img/w/${props.iconImage}.png`}
      />
    </div>
  );
}

export default Icon;
