import React from 'react';
import WeatherDetails from "./WeatherDetails";
import WeatherIcon from "./WeatherIcon";

function Weather({
    city,
    temperature,
    humidity,
    windSpeed,
    cloudiness,
    iconId,
}) {
    return (
        <div className="tile is-vertical is-6 notification is-info">
            <h1 className="title">{city}</h1>
            <div className="columns is-vcentered">
                <div className="column weather-column">
                    <WeatherIcon iconId={iconId} />
                    <div className="temperature-label">{temperature}°C</div>
                </div>
                <WeatherDetails
                    humidity={humidity}
                    windSpeed={windSpeed}
                    cloudiness={cloudiness}
                />
            </div>
        </div>
    );
}

export default Weather;