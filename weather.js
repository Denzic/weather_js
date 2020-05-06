class Weather {
  constructor(city, country) {
    this.appId = "3df61c4aaaa1ffcc782eeacd568154e3"
    this.city = city
    this.country = country
  }

  async getWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&${this.country}&units=metric&appid=${this.appId}`
    )
    const resData = await response.json()
    return resData
  }

  changeLocation(city, country) {
    this.city = city
    this.country = country
  }
}
