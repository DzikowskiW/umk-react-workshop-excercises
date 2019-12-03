import React from 'react';
import 'bulma/css/bulma.min.css';
import './App.css';
import Weather from './Weather';

function App() {
  const weatherData = {
    city: 'Warszawa',
    temperature: 4.0,
    humidity: 60,
    windSpeed: 12,
    cloudiness: 88,
    iconId: '04d',
  };

  return (
    <section className="section">
        <div className="container">
            <Weather {...weatherData} />
        </div>
    </section>
  );
}

export default App;
