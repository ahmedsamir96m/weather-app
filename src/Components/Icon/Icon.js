import React from "react";
import styled from "styled-components";
import "./Icon.css";

function Icon(props) {
  return (
    <div>
      <img
        className="weatherCard--image"
        alt="An icon that represent current weather condition"
        src={props.iconImage}
      />
    </div>
  );
}

export default Icon;
