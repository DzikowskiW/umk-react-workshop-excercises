import React from 'react';
import 'bulma/css/bulma.min.css';
import './App.css';
import Weather from './Weather';
import { fetchWeather } from '../services/open-weather';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      weatherData: null,
    }
  }

  componentDidMount(){
    this.handleWeatherChange();
  }

  async handleWeatherChange(){
    const weatherData = await fetchWeather();
    this.setState({
      weatherData,
    });
  }

  render(){
    return (
      <section className="section">
          <div className="container">
              <Weather {...this.state.weatherData} />
          </div>
      </section>
    );
  }
}

export default App;
