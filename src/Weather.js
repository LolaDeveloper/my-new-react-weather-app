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
            />
          </div>
          <div className="col-3">
            <input type="submit" value="search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <div className="row">
        <div className="col-3">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/rain.png"
            alt="Rain"
          />
          4°
        </div>
        <div className="col-3">
          <ul>
            <li>Precipitation: 50%</li>
            <li>Humidity: 94%</li>
            <li>Wind: 5m/s</li>
          </ul>
        </div>
        <div className="col-6">
          <h1>Kutchan</h1>
          <ul>
            <li>Friday 21:05</li>
            <li>Rain</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
