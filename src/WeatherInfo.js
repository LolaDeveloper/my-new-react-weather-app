import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css";
export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="temperaturedesc mt-3">
        <div className="float-left">
          <WeatherIcon code={props.data.icon} size={52} color="#70757A" />
        </div>

        <div className="float-left">
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
        <div className="weatherResult">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} m/s</li>
          </ul>
        </div>

        <div className="overview">
          <h1>{props.data.city}</h1>
          <div>
            <ul>
              <li className="date">
                <FormattedDate date={props.data.date} />
              </li>
              <li className="description text-capitalize">
                {props.data.description}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
