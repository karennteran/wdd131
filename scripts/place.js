const apiKey = "ddf5ae92f725bc0eda977f92bdfdea00"; // Tu API Key
const city = "Athens"; // Ciudad para la cual deseas el clima
const units = "metric"; // Usa "metric" para °C o "imperial" para °F

async function fetchWeather() {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`
        );
        if (!response.ok) throw new Error("No se pudo obtener el clima.");
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error(error);
    }
}

function displayWeather(data) {
    const temperature = data.main.temp;
    const wind = data.wind.speed;
    const windChill = calculateWindChill(temperature, wind);
    const conditions = data.weather[0].description;

    // Actualizar elementos en la página
    document.querySelector("#temperature").textContent = `${temperature}°C`;
    document.querySelector("#conditions").textContent = capitalize(conditions);
    document.querySelector("#wind").textContent = `${wind} km/h`;
    document.querySelector("#windChill").textContent = `${windChill}°C`;
}

// Fórmula para calcular el Wind Chill (sensación térmica)
function calculateWindChill(temp, wind) {
    if (temp <= 10 && wind >= 4.8) {
        return (
            13.12 +
            0.6215 * temp -
            11.37 * Math.pow(wind, 0.16) +
            0.3965 * temp * Math.pow(wind, 0.16)
        ).toFixed(1);
    }
    return temp.toFixed(1); // Si no aplica Wind Chill, se retorna la temperatura
}

// Capitalizar condiciones del clima
function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

// Llamar la función al cargar la página
fetchWeather();
