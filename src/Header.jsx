import React, { useState, useRef, useEffect } from "react";
import Body from "./Body";
import axios from "axios";

export default function Header() {
  const inputRef = useRef();
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState([]);

  const getForecast = (response) => {
    //console.log(response.data.main);
    setWeather({
      city: inputRef.current.value || "Addis Ababa",
      temperature: Math.round(response.data.main?.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main?.humidity,
      wind: response.data.wind?.speed,
      icon: response.data.weather[0].icon,
    });
    // fetch forecast data
    const city = inputRef.current.value || "Addis Ababa";
    const apiKey = "2513f3c728b1b5ff4f4347e1a6af22b8";
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    axios
      .get(forecastUrl)
      .then((forecastResponse) => {
        const dailyData = forecastResponse.data.list.filter((item) =>
          item.dt_txt.includes("12:00:00")
        );
        setForecast(dailyData);
      })
      .catch((error) => {
        console.error("Error fetching forecast data", error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setWeather({ city: "Addis Ababa" });
    const city = inputRef.current.value;
    if (city) {
      let apiKey = "2513f3c728b1b5ff4f4347e1a6af22b8";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      axios
        .get(apiUrl)
        .then(getForecast)
        .catch((error) => {
          console.error("Error occured while fetching weather data");
        });
    }
  };

  // fetch weather data for Addis Ababa on initial render
  useEffect(() => {
    const defaultCity = "Addis Ababa";
    let apiKey = "2513f3c728b1b5ff4f4347e1a6af22b8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&appid=${apiKey}&units=metric`;
    axios
      .get(apiUrl)
      .then(getForecast)
      .catch((error) => {
        console.error(
          "Error occurred while fetching weather data for default city",
          error
        );
      });
  }, []);

  return (
    <div className="header">
      <form className="search-form" id="search-form-id" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city.."
          ref={inputRef}
          required
          className="search-form-input"
          id="search-form-input-id"
        />
        <input
          type="submit"
          placeholder="Search"
          className="search-form-button"
        />
      </form>
      <Body weatherData={weather} forecastData={forecast} />
    </div>
  );
}
