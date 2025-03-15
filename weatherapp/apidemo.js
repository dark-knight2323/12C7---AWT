let city = document.getElementById("cityName")
function fetchWeather() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=efa9f8b8f67521c72fb3942d5afd3961`)
        .then(response => response.json())
        .then(data => {
            let ele = document.getElementById("temperature");
            let ele1 = document.getElementById("weather");
            ele.innerHTML = `<p>${data.main.temp}&degC</p>`;
            ele1.innerHTML = `<p>${data.weather[0].description}</p>`;
            console.log(data);
        })
        .catch(error => console.log(error))
    
}
