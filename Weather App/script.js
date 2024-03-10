const apiKey = "da53c1a44ce4fbf01c6ea56ad127f491";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = Math.round(data.main.humidity) + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";


    if (data.weather[0].main == "Clear") {
        weatherIcon.src = "project/Weather App/images/clear.png";
    }
    if (data.weather[0].main == "Cloud") {
        weatherIcon.src = "project/Weather App/images/clear.png";
    } if (data.weather[0].main == "Clear") {
        weatherIcon.src = "project/Weather App/images/clear.png";
    } if (data.weather[0].main == "Clear") {
        weatherIcon.src = "project/Weather App/images/clear.png";
    } if (data.weather[0].main == "Clear") {
        weatherIcon.src = "project/Weather App/images/clear.png";
    } if (data.weather[0].main == "Clear") {
        weatherIcon.src = "project/Weather App/images/clear.png";
    }

}
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})


