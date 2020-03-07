//Weather app
// api key : 6985a5575fd7621a70f1a7465884a1a3

// Select elements
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");
const notificationElement = document.querySelector(".notification");

// App data
const weather = {};

weather.temperature = {
    unit: "celsius"
}

// App consts and lets
const KELVIN = 273;
// api key
const key = "6985a5575fd7621a70f1a7465884a1a3";

// Check if user browser supports geolocation
if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(setPosition, showError);
}
else {
    notificationElement.display = "block";
    notificationElement.innerHTML = "<p>Browser doesn't support geolocation</p>";
}

//set users' position
function setPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    getWeather(latitude, longitude);
}

// Show error when geolocation not identified
function showError(error) {
    notificationElement.display = "block";
    notificationElement.innerHTML = `<p> ${error.message} </p>`;
}

//display weather
function displayWeather() {
    //    iconElement.innerHTML = `<img src="icons/$(weather.iconId).png" width="1.875rem"/>`;
    tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
    descElement.innerHTML = weather.description;
    locationElement.innerHTML = `${weather.city}, ${weather.country}`;
}


// Get weather from api provider
function getWeather(latitude, longitude) {
    let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;

    fetch(api)
        .then(function (response) {
            let data = response.json();
            return data;
        })

        .then(function (data) {
            weather.temperature.value = Math.floor(data.main.temp - KELVIN);
            weather.description = data.weather[0].description;
            //weather.iconId = data.weather[0].icon;
            weather.city = data.name;
            weather.country = data.sys.country;
        })
        .then(function () {
            displayWeather();
        })
}


// Code to get icons displaying
//let iconCode = data.weather[0].icon;
//let iconUrl = "http://openweathermap.org/img/wn/" + iconCode + ".png";
//$(".icon").html("<img src='http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png' alt='Icon depicting //current weather.'>");



// C to F conversion
//function celsiusToFahrenheit(temperature) {
//    return (temperature * 9 / 5) + 32;
//}

// When user clicks on the temperature it swaps from C to F
//tempElement.addEventListener("click", function () {
//    if (weather.temperature.value === undefined) return;

//   if (weather.temperature.unit === "celsius") {
//        let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
//        fahrenheit = Math.floor(fahrenheit);

//        tempElement.innerHTML = `${fahrenheit}°<span>F</span>`;
//        weather.temperature.unit = "fahrenheit";
//    }

//    else {
//        tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
//        weather.temperature.unit = "celsius";
//    }

//});





