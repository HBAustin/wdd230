const currentTemp = document.getElementById('currentTemp');
const weatherDesc = document.getElementById('weatherDesc');
const humidity = document.getElementById('humidity');
const alertText = document.getElementById('alertText');
const alerts = document.getElementById('alerts');
const closeAlert = document.getElementById('closeAlert');
const forecast = document.getElementById('forecast');

const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?lat=-29.78&lon=30.83&units=metric&appid=95d6eb3572d3115c722f6784052df38f";

async function fetchWeatherData() {
    try {
        const response = await fetch(weatherUrl);
        if (response.ok) {
            const data = await response.json();
            displayWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayWeather(weatherData) {
    const temperature = weatherData.main.temp.toFixed(0);
    const description = weatherData.weather[0].description;
    const humidityValue = weatherData.main.humidity;

    currentTemp.textContent = `${temperature}°C`;
    weatherDesc.textContent = description;
    humidity.textContent = `${humidityValue}%`;

    if (weatherData.hasOwnProperty('alerts') && weatherData.alerts.length > 0) {
        const alert = weatherData.alerts[0];
        alertText.textContent = `Alert: ${alert.event}, ${alert.description}`;
        alerts.classList.remove('hidden');

        closeAlert.onclick = () => {
            alerts.classList.add('hidden');
        };
    } else {
        alerts.classList.add('hidden');
    }
    
    fetchOneDayForecast();
}

function fetchOneDayForecast() {
    const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=-29.78&lon=30.83&units=metric&appid=95d6eb3572d3115c722f6784052df38f";

    fetch(forecastUrl)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw Error(response.statusText);
            }
        })
        .then(data => {
            displayForecast(data);
        })
        .catch(error => {
            console.log("Forecast Error:", error);
        });
}

function displayForecast(forecastData) {
    const forecastContainer = document.getElementById('forecast');

    const next24HoursForecast = forecastData.list.filter(entry => {
        const entryTimestamp = entry.dt * 1000;
        const currentTimestamp = Date.now();
        return entryTimestamp > currentTimestamp && entryTimestamp <= currentTimestamp + 24 * 60 * 60 * 1000;
    });

    if (next24HoursForecast.length > 0) {
        forecastContainer.innerHTML = "<h3>One Day Forecast</h3>";
        next24HoursForecast.forEach(entry => {
            const time = new Date(entry.dt * 1000).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
            const temperature = entry.main.temp.toFixed(0);
            const description = entry.weather[0].description;

            const forecastItem = document.createElement('p');
            forecastItem.textContent = `${time} - ${description}, ${temperature}°C`;
            forecastContainer.appendChild(forecastItem);
        });
    } else {
        forecastContainer.innerHTML = "<p>No forecast available for the next 24 hours.</p>";
    }
}

fetchWeatherData();
