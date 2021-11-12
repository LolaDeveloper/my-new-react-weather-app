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
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Rain"
          />
          34°
          <div className=" col-3 description">
            <div>
              <ul>
                <li>Precipitation:14%</li>
                <li>Humidity:43%</li>
                <li>Wind:3 m/s</li>
              </ul>
            </div>
          </div>
        </div>

        <div className=" overview col-6">
          <h1>Ogbomosho, Nigeria</h1>
          <div>
            <ul>
              <li className="date">Friday 15:00</li>
              <li className="description">Mostly Sunny</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
