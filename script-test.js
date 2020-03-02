//Weather app
// api key : 6985a5575fd7621a70f1a7465884a1a3

// Select elements
const cityId = document.querySelector(".city select");
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
    let api = (`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`);
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let latitude, longitude = "Your location";

    getWeather(position);
}

//set users' city choices from dropdown
function setCity() {
    let api = (`http://api.openweathermap.org/data/2.5/forecast?id=2643743&appid=${key}`);
    let city = ("London" === 2643743);
    let api = (`http://api.openweathermap.org/data/2.5/forecast?id=5128638&appid=${key}`);
    let city = ("New York" === 5128638);
    let api = (`http://api.openweathermap.org/data/2.5/forecast?id=3119841&appid=${key}`);
    let city = ("A Coruna" === 3119841);

    getWeather(city)
}

// Show error when geolocation not identified
function showError(error) {
    notificationElement.display = "block";
    notificationElement.innerHTML = `<p> ${error.message} </p>`;
}

// Get weather from api provider based user location
function getWeather() {
    let api = (` `);

    fetch(api)
        .then(function (response) {
            let data = response.json();
            return data;
        })

        .then(function (data) {
            weather.temperature.value = Math.floor(data.main.temp - KELVIN);
            weather.description = data.weather[0].description;
            weather.iconId = data.weather[0].icon;
            weather.city = data.name;
            weather.country = data.sys.country;
        })
        .then(function () {
            displayWeather();
        })
}


//weather display 
function displayWeather() {
    iconElement.innerHTML = `<img src="icons/$(weather.iconId).png"/>`;
    tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
    descElement.innerHTML = weather.description;
    locationElement.innerHTML = `${weather.city}, ${weather.country}`;
}


// C to F conversion
function celsiusToFahrenheit(temperature) {
    return (temperature * 9 / 5) + 32;
}

// When user clicks on the temperature it swaps from C to F
tempElement.addEventListener("click", function () {
    if (weather.temperature.value === undefined) return;

    if (weather.temperature.unit === "celsius") {
        let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
        fahrenheit = Math.floor(fahrenheit);

        tempElement.innerHTML = `${fahrenheit}°<span>F</span>`;
        weather.temperature.unit = "fahrenheit";
    }

    else {
        tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
        weather.temperature.unit = "celsius";
    }

});


//Select values from HTML form
function getFormValues() {
    let x = document.getElementById("cityId").value;
    document.getElementById("cityId").innerHTML = Date();
    document.getElementById("location-result").innerHTML = `<h2>${x}</h2>`;
}

// Form on 'select' display weather
cityId.addEventListener("onSelect", function () {
    if (position = true) {
        displayWeather(latitude, longitude)
    }
    else if (city = true) {
        displayWeather(city)
    }
    else (unknown)
});
getFormValues.addEventListener('onClick', function () {
    displayWeather()
});

// Code to get icons to display
let iconCode = data.weather[0].icon;
let iconUrl = "http://openweathermap.org/img/wn/" + iconCode + ".png";
$(".icon").html("<img src='http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png' alt='Icon depicting current weather.'>");






