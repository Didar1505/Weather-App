let token = 'YOUR_API_TOKEN'
let url = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${token}`

async function checkWeather(city) {
    const response = await fetch(`${url}&q=${city}`)    
    const data = await response.json()
    console.log(data)

    let icon_text = data.weather[0].main.toLowerCase()
    // console.log(document.querySelector('.weather-icon').src)
    document.querySelector('.weather-icon').src = 'images/' + icon_text+".png"

    document.querySelector('.temp').textContent = Math.round(Number(data.main.temp)) + "°C"
    document.querySelector(".city").textContent = data.name
    document.querySelector(".wind").textContent = Math.round(data.wind.speed) + " km/h"
    document.querySelector(".humidity").textContent = data.main.humidity + " %"
}

let cityInput = document.getElementById('city-name')
let searchButton = document.getElementById("search-button")
searchButton.addEventListener("click", (e) => {
    let cityName = cityInput.value
    
    checkWeather(cityName)
    cityInput.value = ""
})

cityInput.addEventListener("keyup", (e) => {
    if(e.key == 'Enter') {
        searchButton.click()
    }
})