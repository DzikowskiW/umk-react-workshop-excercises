const API_KEY = 'API_KEY';
const API_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric&q=Torun,pl`


async function fetchWeather() {
    const response = await fetch(API_URL);
    const rawData = await response.json();
    return mapOpenWeatherToDomainModel(rawData);
}

function mapOpenWeatherToDomainModel(data) {
    return {
        city: data.name,
        temperature: Math.round(data.main.temp),
        iconId: data.weather[0].icon,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        cloudiness: data.clouds.all,
    };
}


export { fetchWeather };
