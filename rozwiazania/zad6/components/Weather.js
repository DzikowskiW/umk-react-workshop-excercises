import React from 'react';
import WeatherDetails from "./WeatherDetails";
import WeatherIcon from "./WeatherIcon";

function Weather() {
    return (
        <div className="tile is-vertical is-6 notification is-info">
            <h1 className="title">Toruń</h1>
            <div className="columns is-vcentered">
                <div className="column weather-column">
                    <WeatherIcon />
                    <div className="temperature-label">2°C</div>
                </div>
                <WeatherDetails />
            </div>
        </div>
    );
}

export default Weather;