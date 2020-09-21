import React, { useEffect, useState } from "react";
import WeatherCard from "../WeatherCard/WeatherCard";
function WeatherController(props) {
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
        setTemperature(resp.main.temp);
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
      ) : dataLoading ? (
        <div>Loading</div>
      ) : (
        <div>
          Errors
          <button
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
