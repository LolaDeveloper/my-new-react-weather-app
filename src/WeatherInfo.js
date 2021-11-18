import React from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="card">
        <div className="cardBody">
          <div className="temperaturedesc mt-3">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} />
            </div>

            <div>
              <span className="temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span className="unit"> °C|°F</span>
            </div>
            <div className="weatherResult">
              <ul>
                <li>{props.data.humidity}:47%</li>
                <li>{props.data.wind} : m/s</li>
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
      </div>
    </div>
  );
}
