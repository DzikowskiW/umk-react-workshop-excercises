import React from 'react';

function App() {
  const weatherData = {
    location: 'Toruń',
    date: '2019-12-06',
    temperature: -2.0,
  };

  return (
    <React.Fragment>
      <h1>Pogoda - {weatherData.location}</h1>
      <div id="forecast">
        <ul>
          <li>Data: {weatherData.date}</li>
          <li>Temperatura: {weatherData.temperature}</li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default App;
