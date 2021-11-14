import React from "react";
import "./Weather.css";

export default function Weather() {
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
      <div className="clear-fix">
        <div className="temperaturedesc">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Partly cloudy"
            className="float-left"
          />
          <div>
            <span className="temperature">33</span>
            <span className="unit"> °C|°F</span>
          </div>
          <div className="weatherResult">
            <ul>
              <li>Precipitation:0%</li>
              <li>Humidity:47%</li>
              <li>Wind:2 m/s</li>
            </ul>
          </div>

          <div className="overview">
            <h1>Ogbomosho, Nigeria</h1>
            <div>
              <ul>
                <li className="date">Saturday 13:00</li>
                <li className="description">Partly cloudy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <hr />
    </div>
  );
}
