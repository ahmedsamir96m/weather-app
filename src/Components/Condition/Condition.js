import React from "react";
import styled from "styled-components";
import "./Condition.css";

function Condition(props) {
  return (
    <div className="">
      <span className="weatherCard--temperature h1Span">
        {props.weatherTemperature}°C
      </span>
      <span className="weatherCard--condition h3Span">
        {props.weatherCondition}
      </span>
    </div>
  );
}

export default Condition;
