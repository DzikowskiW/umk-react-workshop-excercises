const API_KEY = 'WKLEJ KLUCZ API DO OPEN WEATHER MAP TUTAJ';
const API_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric&q=Torun,pl`

async function fetchWeather() {
    return Promise((resolve)  => {
        resolve({
            city: 'Warszawa',
            temperature: 6.0,ś
            humidity: 60,
            windSpeed: 12,
            cloudiness: 88,
            iconId: '04d',
        });
    });
}

function fetchWeatherSync() {
    return {
        city: 'Warszawa',
        temperature: 5.0,
        humidity: 60,
        windSpeed: 12,
        cloudiness: 88,
        iconId: '04d',
    };
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

export { fetchWeather, fetchWeatherSync };
