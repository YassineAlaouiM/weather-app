const apiKey = "eea1b8cd644c0e353312cbcc58fe5c0d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search-box input");
const searchBtn = document.querySelector(".search-box button");
const weatherIcon = document.querySelector(".weather-icon");

async function getWeather(city) {
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
    
    if(response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();
    document.querySelector(".city").innerText = data.name;
    document.querySelector(".temp").innerText = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerText = data.main.humidity + "%";
    document.querySelector(".wind").innerText = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png";
    } else if(data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png";
    } else if(data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png";
    } else if(data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
    } else if(data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png";
    } else if(data.weather[0].main == "Snow") {
        weatherIcon.src = "images/snow.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", ()=> {
    getWeather(searchBox.value);
});