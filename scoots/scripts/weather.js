async function fetchWeatherData() {
    const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?lat=20.45&lon=-86.90&units=metric&appid=95d6eb3572d3115c722f6784052df38f";
    try {
        const response = await fetch(weatherUrl);
        if (response.ok) {
            const data = await response.json();
            displayCurrentWeather(data);
        } else {
            throw new Error('Weather data request failed');
        }
    } catch (error) {
        console.log(error);
    }
}

function displayCurrentWeather(weatherData) {
    const currentTemp = weatherData.main.temp.toFixed(0);
    const description = weatherData.weather[0].description;
    const humidity = weatherData.main.humidity;

    document.getElementById('currentTemp').textContent = `${currentTemp}°C`;
    document.getElementById('weatherDesc').textContent = description;
    document.getElementById('humidity').textContent = `${humidity}%`;
}

async function fetchOneDayForecast() {
    const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=20.45&lon=-86.90&units=metric&appid=95d6eb3572d3115c722f6784052df38f";
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            displayOneDayForecast(data);
        } else {
            throw new Error('One day forecast request failed');
        }
    } catch (error) {
        console.log(error);
    }
}

function displayOneDayForecast(forecastData) {
    const forecastContainer = document.getElementById('forecast');
    const next24HoursForecast = forecastData.list.filter(entry => {
        const entryTimestamp = entry.dt * 1000;
        const currentTimestamp = Date.now();
        return entryTimestamp > currentTimestamp && entryTimestamp <= currentTimestamp + 24 * 60 * 60 * 1000;
    });

    if (next24HoursForecast.length > 0) {
        const forecastList = document.createElement('ul');
        next24HoursForecast.forEach(entry => {
            const time = new Date(entry.dt * 1000).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
            const temperature = entry.main.temp.toFixed(0);
            const description = entry.weather[0].description;

            const listItem = document.createElement('p');
            listItem.textContent = `${time} - ${description}, ${temperature}°C`;
            forecastList.appendChild(listItem);
        });

        forecastContainer.innerHTML = "<h3>One Day Forecast</h3>";
        forecastContainer.appendChild(forecastList);
    } else {
        forecastContainer.innerHTML = "<h3>One Day Forecast</h3><p>No forecast available for the next 24 hours.</p>";
    }
}

fetchWeatherData();
fetchOneDayForecast();