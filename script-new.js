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

const form = document.getElementById('form')
const city = document.getElementById('city');
const tempDisplay = document.getElementById('temp-display');
let cityId = '2172797';


form.addEventListener('submit', (e) => {
    e.preventDefault()
    const apiKey = '6985a5575fd7621a70f1a7465884a1a3';
    const city = selectCity.value;

    getWeather(cityId, apiKey).then((json) => {
        tempDisplay.innerHTML = json.main.temp
    }).catch((err) => {
        console.log(err.message)
    })
}






//function getFormValues() {

//        addEventListener("onClick", function getFormValues() {
 //           if (cityId === "2643743") {
 //               getWeather('London weather')
 //           }
 //           if (cityId === "5128638") {
 //               getWeather('New York weather')
   //         }
 //           if (cityId === "3119841") {
 //               getWeather('A Coruna weather')
     //       }
 //           else (unknown)
  //      })
    //}
