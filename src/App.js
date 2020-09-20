import React, { useEffect, useState } from "react";
import "./App.css";
import WeatherCard from "./Components/WeatherCard/WeatherCard";

function App() {
  const [searchQuery, setSearchQuery] = useState("tokyo");
  const [temperature, setTemperature] = useState("");
  const [weatherCondition, setWeatherCondition] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [iconImage, setIconImage] = useState("");

  const weatherData = async (query) => {
    const apiResponse = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=043a835a34904ba1bd34803d928b7700`
    );
    const jsonData = await apiResponse.json();
    return jsonData;
  };

  const handleCitySearch = (e) => {
    e.preventDefault();
    weatherData(searchQuery).then((resp) => {
      setCity(resp.name);
      setCountry(resp.sys.country);
      setWeatherCondition(resp.weather[0].main);
      setIconImage(resp.weather[0].icon);
      setTemperature(resp.main.temp);
    });
  };

  useEffect(() => {
    weatherData(searchQuery).then((resp) => {
      setCity(resp.name);
      setCountry(resp.sys.country);
      setWeatherCondition(resp.weather[0].main);
      setIconImage(resp.weather[0].icon);
      setTemperature(resp.main.temp);
    });
  }, []);

  return (
    <div className="App">
      <form action="">
        <input
          type="text"
          name="city"
          id="weatherCity"
          placeholder="Enter city name"
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            handleCitySearch(e);
          }}
        >
          Search
        </button>
      </form>
      <WeatherCard
        temperature={temperature}
        weatherCondition={weatherCondition}
        city={city}
        country={country}
        iconImage={iconImage}
      />
    </div>
  );
}

export default App;
