const currentTemp = document.querySelector('#temperature');
const weatherDesc = document.querySelector('#weatherDescription');
const forecastContainer = document.querySelector('#forecast');

const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=-29.78&lon=30.83&units=metric&appid=95d6eb3572d3115c722f6784052df38f';

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(weatherData) {
  const currentTemperature = weatherData.list[0].main.temp.toFixed(0);
  const currentDesc = weatherData.list[0].weather[0].description;

  currentTemp.textContent = `Current Temperature: ${currentTemperature}°C`;
  weatherDesc.textContent = `Weather Description: ${currentDesc}`;

  forecastContainer.innerHTML = '';
  for (let i = 0; i < 3; i++) {
    const date = new Date(weatherData.list[i * 8].dt * 1000);
    const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
    const temperature = weatherData.list[i * 8].main.temp.toFixed(0);
    const forecastItem = document.createElement('div');
    forecastItem.textContent = `${dayOfWeek}: ${temperature}°C`;
    forecastContainer.appendChild(forecastItem);
  }
}

apiFetch();
