import React from 'react';

function WeatherDetails({ humidity, windSpeed, cloudiness}) {
    return (
        <div className="column">
            <ul>
                <li>Wilgotność: {humidity}%</li>
                <li>Wiatr: {windSpeed} km/h</li>
                <li>Zachmurzenie: {cloudiness}%</li>
            </ul>
        </div>
    );
}

export default WeatherDetails;