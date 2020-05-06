const storage = new Storage()
//
const weatherLocation = storage.getLocationData()

const weather = new Weather(weatherLocation.city, weatherLocation.country)

const ui = new UI()

//get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather)

document.getElementById("w-change-btn").addEventListener("click", e => {
  // Change location
  const city = document.getElementById("city").value
  const country = document.getElementById("country").value
  console.log(city)
  weather.changeLocation(city, country)
  getWeather()
  $("#locModal").modal("hide")

  // Store into localstorage
  storage.setLocationData(city, country)

  // Update Time
  getTime()
})

document.querySelector("p").addEventListener("click", refresh)

function refresh(e) {
  if (e.target.classList.contains("fas")) {
    getWeather()
  }
}

function getWeather() {
  weather
    .getWeather()
    .then(result => ui.paint(result))
    .catch(err => console.log(err))
  getTime()
  getDate()
}

// Get full current time
function getTime() {
  const now = new Date()
  ui.addCurrentTime(now)
}

// Get current date
function getDate() {
  const dataObj = new Date().toDateString()
  ui.addCurrentDate(dataObj)
}
