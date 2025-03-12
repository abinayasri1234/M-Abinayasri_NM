document.getElementById('getWeatherButton').addEventListener('click', getWeather);

async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'YOUR_OPENWEATHER_API_KEY';  // Replace with your OpenWeather API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) {
            document.getElementById('cityName').textContent = `Weather in ${data.name}`;
            document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
            document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
            document.getElementById('description').textContent = `Conditions: ${data.weather[0].description}`;

            const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
            document.getElementById('weatherIcon').src = iconUrl;
            document.getElementById('weatherResult').style.display = 'block';
            document.getElementById('error').style.display = 'none';
        } else {
            document.getElementById('error').style.display = 'block';
            document.getElementById('weatherResult').style.display = 'none';
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
        document.getElementById('error').style.display = 'block';
        document.getElementById('weatherResult').style.display = 'none';
    }
}