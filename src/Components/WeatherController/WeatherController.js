import React, { useEffect, useState } from "react";
import WeatherCard from "../WeatherCard/WeatherCard";
function WeatherController(props) {
  // Styles
  const formStyles = {
    textAlign: "center",
    margin: "5em 0",
  };

  const btnStyles = {
    background: "none",
    border: "2px solid black",
    padding: "10px 25px",
    fontSize: "16px",
  };

  const searchBarStyles = {
    width: "200px",
    height: "30px",
    padding: " 5px 10px",
    marginRight: "10px",
    border: "2px solid black",
  };

  const errorContainerStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: "100vh",
    gap: "25px",
  };

  const errorMsgStyles = {
    fontSize: "36px",
    color: "red",
  };

  /* Setting Different Weather State */
  const { location } = props;
  const [searchQuery, setSearchQuery] = useState("tokyo"); //settinng tokyo to be the default city when component mount
  const [temperature, setTemperature] = useState("");
  const [weatherCondition, setWeatherCondition] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [iconImage, setIconImage] = useState("");
  const [dataError, setDataError] = useState(false);
  const [dataLoading, setDataLoading] = useState(true);

  /* Calling openWeather API Asynchronous */
  const weatherData = async (query) => {
    try {
      setDataLoading(true);
      const apiResponse = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=f3dd4d99772d41e15b26f5fc6a2b683c`
      );
      const jsonData = await apiResponse.json().then((resp) => {
        setCity(resp.name);
        setCountry(resp.sys.country);
        setWeatherCondition(resp.weather[0].main);
        setIconImage(resp.weather[0].icon);
        setTemperature(Math.floor(resp.main.temp));
      });
      setDataError(false);
      setDataLoading(false);
      return jsonData;
    } catch (error) {
      setDataError(true);
      setDataLoading(false);
    }
  };

  /* Function to set the state for differrent weather properties */
  const handleWeather = () => {
    return weatherData(searchQuery);
  };

  const handleCitySearch = (e) => {
    e.preventDefault();
    handleWeather();
  };

  /* using useEffect to set the weather state passed on the default city */
  useEffect(() => {
    weatherData(location);
  }, []);

  return (
    <div>
      {!dataError && !dataLoading ? (
        <div className="App">
          <form
            style={formStyles}
            onSubmit={(e) => {
              e.preventDefault();
              handleCitySearch(e);
            }}
          >
            <input
              style={searchBarStyles}
              required
              type="text"
              name="city"
              id="weatherCity"
              placeholder="Enter city name"
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
            />
            <button type="submit" style={btnStyles}>
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
      ) : dataLoading ? (
        <div>Loading</div>
      ) : (
        <div className="dataError" style={errorContainerStyles}>
          <p style={errorMsgStyles}>
            Error 404, You've searched for unknown place!
          </p>
          <button
            style={btnStyles}
            onClick={(e) => {
              e.preventDefault();
              window.location.reload();
            }}
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
}

export default WeatherController;
