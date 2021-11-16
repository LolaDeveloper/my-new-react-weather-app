import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: "Saturday 13:00",
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>

        <div className="temperaturedesc">
          <img
            src={weatherData.iconUrl}
            alt={weatherData.description}
            className="float-left"
          />
          <div>
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit"> °C|°F</span>
          </div>
          <div className="weatherResult">
            <ul>
              <li>{weatherData.humidity}:47%</li>
              <li>{weatherData.wind} : m/s</li>
            </ul>
          </div>

          <div className="overview">
            <h1>{weatherData.city}</h1>
            <div>
              <ul>
                <li className="date">{weatherData.date}</li>
                <li className="description text-capitalize">
                  {weatherData.description}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "224e79ec9be151ffbe6eb3b4e7ab3ada";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
