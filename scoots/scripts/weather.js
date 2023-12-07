const currentTemp = document.querySelector('#currentTemp');
const weatherIcon = document.querySelector('#weatherIcon');
const captionDesc = document.querySelector('#figcaption');

const url = "https://api.openweathermap.org/data/2.5/weather?lat=-29.78&lon=30.83&units=metric&appid=95d6eb3572d3115c722f6784052df38f";

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
    const temperature = weatherData.main.temp.toFixed(0);
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc  = weatherData.weather[0].description;

    currentTemp.innerHML = `<strong>${temperature}</strong> - ${desc}`;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
};

apiFetch();