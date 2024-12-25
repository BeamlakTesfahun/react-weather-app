import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Body() {
  const weatherIcons = {
    Mon: "CLEAR_DAY",
    Tue: "PARTLY_CLOUDY_DAY",
    Wed: "CLOUDY",
    Thu: "RAIN",
    Fri: "SNOW",
  };
  return (
    <>
      <div className="weather-app-parameters main">
        <div>
          <h1 className="weather-app-city">Addis Ababa</h1>
          <p className="weather-app-data">
            <span>Monday, 12:30 PM</span>
            <span>, </span>
            <span className="description">Partly Cloudy</span>
            <br />
            <span> Humidity: </span>
            <strong className="humidity">65</strong>
            <strong>%</strong>,<span> Wind: </span>
            <strong className="wind-speed">15</strong>
            <strong> km/h</strong>
          </p>
        </div>
        <div className="weather-app-data-container">
          <div className="weather-app-emoji">
            <ReactAnimatedWeather
              icon="CLEAR_DAY"
              color="black"
              size={60}
              animate={true}
            />
            {/* <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
              alt="Cloudy Icon"
              className="weather-app-emoji"
            /> */}
          </div>
          <div className="weather-app-temp">22</div>
          <div className="weather-app-unit">°C</div>
        </div>
      </div>

      {/* weather Forecast section */}
      <div className="weather-forecast">
        {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day) => (
          <div key={day}>
            <p className="weather-forecast-date">{day}</p>
            <div className="weather-forecast-icon">
              <ReactAnimatedWeather
                icon={weatherIcons[day]}
                color="black"
                size={60}
                animate={true}
              />
            </div>
            {/* <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
              alt={`${day} Icon`}
              className="weather-forecast-icon"
            /> */}
            <div className="weather-forecast-temperatures">
              <span className="weather-forecast-temperature">15°C</span>
              <span className="weather-forecast-temperature">30°C</span>
            </div>
          </div>
        ))}
      </div>
      <br />
    </>
  );
}
