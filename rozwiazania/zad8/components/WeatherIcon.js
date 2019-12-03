import React from 'react';

function WeatherIcon({ iconId }) {
    return (<img alt="weather icon" src={`http://openweathermap.org/img/wn/${iconId}@2x.png`} />);
}

export default WeatherIcon;