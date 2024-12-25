import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Body({ weatherData, forecastData }) {
  // const weatherIcons = {
  //   Mon: "CLEAR_DAY",
  //   Tue: "PARTLY_CLOUDY_DAY",
  //   Wed: "CLOUDY",
  //   Thu: "RAIN",
  //   Fri: "SNOW",
  // };

  // for formatting current date and time
  const getCurrentDateTime = () => {
    const now = new Date();
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const day = days[now.getDay()];
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedTime = `${day}, ${hours % 12 || 12}:${minutes} ${ampm}`;
    return formattedTime;
  };
  return (
    <>
      {weatherData && weatherData.city && (
        <div className="weather-app-parameters main">
          <div>
            <h1 className="weather-app-city">{weatherData.city}</h1>
            <p className="weather-app-data">
              <span>{getCurrentDateTime()}</span>
              <span>, </span>
              <span className="description">{weatherData.description}</span>
              <br />
              <span> Humidity: </span>
              <strong className="humidity">{weatherData.humidity}</strong>
              <strong>%</strong>,<span> Wind: </span>
              <strong className="wind-speed">{weatherData.wind}</strong>
              <strong> km/h</strong>
            </p>
          </div>
          <div className="weather-app-data-container">
            <div className="weather-app-emoji">
              <img
                src={`http://openweathermap.org/img/wn/${weatherData.icon}.png`}
                alt={weatherData.description}
                className="weather-app-emoji"
              />
              {/* <ReactAnimatedWeather
                icon="CLEAR_DAY"
                color="black"
                size={60}
                animate={true}
              /> */}
              {/* <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
              alt="Cloudy Icon"
              className="weather-app-emoji"
            /> */}
            </div>
            <div className="weather-app-temp">{weatherData.temperature}</div>
            <div className="weather-app-unit">°C</div>
          </div>
        </div>
      )}
      {/* weather Forecast section */}
      <div className="weather-forecast">
        {forecastData.map((day, index) => (
          <div key={index}>
            <p className="weather-forecast-date">
              {new Date(day.dt_txt).toLocaleDateString("en-US", {
                weekday: "long",
              })}
            </p>
            <div className="weather-forecast-icon">
              <img
                src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                alt={day.weather[0].description}
              />
              {/* <ReactAnimatedWeather
                icon={weatherIcons[day]}
                color="black"
                size={60}
                animate={true}
              /> */}
            </div>
            {/* <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
              alt={`${day} Icon`}
              className="weather-forecast-icon"
            /> */}
            <div className="weather-forecast-temperatures">
              <span className="weather-forecast-temperature">
                {Math.round(day.main.temp_min)}°C
              </span>
              <span className="weather-forecast-temperature">
                {Math.round(day.main.temp_max)}°C
              </span>
            </div>
          </div>
        ))}
      </div>
      <br />
    </>
  );
}
