import React from 'react';
import 'bulma/css/bulma.min.css';
import './App.css';
import Weather from './Weather';
import { fetchWeather } from '../services/open-weather';
import LocationInput from './LocationInput';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      weatherData: null,
    }
  }

  componentDidMount(){
    this.handleWeatherChange('Toruń');
  }

  async handleWeatherChange(city){
    const weatherData = await fetchWeather(city);
    this.setState({
      weatherData,
    });
  }

  render(){
    return (
      <section className="section">
          <div className="container">
            <LocationInput 
              onSubmit={city => this.handleWeatherChange(city)}
            />
            <Weather {...this.state.weatherData} />
          </div>
      </section>
    );
  }
}

export default App;
