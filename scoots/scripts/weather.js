async function fetchWeatherData() {
    const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?lat=20.45&lon=-86.90&units=metric&appid=95d6eb3572d3115c722f6784052df38f";
    try {
        const response = await fetch(weatherUrl);
        if (response.ok) {
            const data = await response.json();
            displayCurrentWeather(data);
            displayHighTemperature(data);
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

document.addEventListener('click', function (event) {
    if (event.target.classList.contains('closebtn')) {
        const closeableMessage = event.target.closest('.closeable-message');
        if (closeableMessage) {
            closeableMessage.style.display = 'none';
        }
    }
});

function displayHighTemperature(weatherData) {
    const maxTemp = weatherData.main.temp_max.toFixed(0);
    const closeableMessage = document.createElement('div');
    closeableMessage.classList.add('closeable-message');
    closeableMessage.innerHTML = `<p>Today's high temperature: ${maxTemp}°C <span class="closebtn"> ✕ </span></p>`;

    const header = document.querySelector('header');
    header.insertBefore(closeableMessage, header.firstChild);
}

async function fetchOneDayThreePMForecast() {
    const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=20.45&lon=-86.90&units=metric&appid=95d6eb3572d3115c722f6784052df38f";
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            displayOneDayThreePMForecast(data);
        } else {
            throw new Error('One day 3:00 pm forecast request failed');
        }
    } catch (error) {
        console.log(error);
    }
}

function displayOneDayThreePMForecast(forecastData) {
    const tomorrowForecast = forecastData.list.find(entry => {
        const entryTimestamp = entry.dt * 1000;
        const tomorrowTimestamp = new Date().setHours(0, 0, 0, 0) + 24 * 60 * 60 * 1000;
        const threePMTimestamp = tomorrowTimestamp + 15 * 60 * 60 * 1000; 

        return entryTimestamp > tomorrowTimestamp && entryTimestamp <= threePMTimestamp;
    });

    const forecastContainer = document.getElementById('forecast');
    if (tomorrowForecast) {
        const temperature = tomorrowForecast.main.temp.toFixed(0);
        const description = tomorrowForecast.weather[0].description;
        const iconCode = tomorrowForecast.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

        const forecastInfo = document.createElement('p');
        forecastInfo.textContent = `3:00 PM Forecast - ${description}, ${temperature}°C`;

        const icon = document.createElement('img');
        icon.setAttribute('src', iconUrl);
        forecastInfo.appendChild(icon);

        forecastContainer.appendChild(forecastInfo);
    } else {
        forecastContainer.innerHTML = "<h3>Tomorrows Weather</h3><p>No forecast available for 3:00 PM tomorrow.</p>";
    }
}

fetchWeatherData();
fetchOneDayThreePMForecast();