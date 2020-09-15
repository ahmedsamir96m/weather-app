import React from "react";
import "./Location.css";

const Location = (props) => {
  return (
    <div className="weatherCard--location">
      <span className="weatherCard--location-city h1Span">Cairo</span>
      <span className="weatherCard--location-country h3Span">EGY</span>
    </div>
  );
};

export default Location;
