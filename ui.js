class UI {
  constructor() {
    this.location = document.getElementById("w-location")
    this.desc = document.getElementById("w-desc")
    this.string = document.getElementById("w-string")
    this.details = document.getElementById("w-detials")
    this.icon = document.getElementById("w-icon")
    this.humidity = document.getElementById("w-humidity")
    this.feelsLike = document.getElementById("w-feels-like")
    this.dewpoint = document.getElementById("w-dewpoint")
    this.wind = document.getElementById("w-wind")
  }

  paint(weather) {
    this.location.textContent = `${weather.name}, ${weather.sys.country}`
    this.desc.textContent = weather.weather[0].description
    this.string.innerHTML = `${weather.main.temp} &deg;C`
    this.icon.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    )
    this.feelsLike.innerHTML = `Feels Like: ${weather.main.feels_like} &deg;C`

    this.humidity.textContent = `Humidity: ${weather.main.humidity}%`

    this.dewpoint.textContent = `Pressure: ${weather.main.pressure} P`

    this.wind.textContent = `Wind Speed: ${weather.wind.speed} m/s`
  }

  addCurrentTime(time) {
    const now = document.getElementById("now")

    /* const a = document.createElement("a")
    const i = document.createElement("i")
    i.setAttribute("class", "fas fa-sync-alt")
    a.appendChild(i)
    let str = a.outerHTML */

    const refreshIcon = `
      <a style='cursor:pointer'>
        <i class='fas fa-sync-alt'></i>
      </a>
      `
    now.innerHTML = `${refreshIcon} Updated at: ${time}`
  }

  addCurrentDate(date) {
    const dateUi = document.getElementById("date")
    dateUi.innerHTML = `${date}`
  }
}
