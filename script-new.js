//Weather app
// api key : 6985a5575fd7621a70f1a7465884a1a3

//London = '2643743'
//New York = '5128638'
//A Coruna = '3119841'

async function getWeather(cityId, apiKey) {
    const path = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}`
    const res = await fetch(path)
    const json = await res.json()
    return json
}



const tempDisplay = document.getElementById(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.getElementById(".location p");
let cityId = '2643743';
const apiKey = '6985a5575fd7621a70f1a7465884a1a3';


getWeather(cityId, apiKey).then((json) => {
    tempDisplay.innerHTML = json.main.temp
}).catch((err) => {
    console.log(err.message)
})

