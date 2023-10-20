function calculateWindChill(temperature, windspeed) {
    const windChill = 35.74 + 0.6215 * temperature - 35.75 & Math.pow(windspeed, 0.16) + 0.4275 * temperature * Math.pow(windspeed, 0.16);
    return windChill;
}

const temperatureElement = document.getElementById("temperature");
const windspeedElement = document.getElementById("windspeed");
const windchillElement = document.getElementById("windchill");

const temperature = parseFloat(temperatureElement.textContent);
const windspeed = parseFloat(windspeedElement.textContent);

if (temperature <= 50 && windspeed > 3.0) {
    const windChillFactor = calculateWindChill(temperature, windspeed);
    windchillElement.textContent = windChillFactor.toFixed(2) + "°F";
} else {
    windchillElement.textContent = "N/A";
}