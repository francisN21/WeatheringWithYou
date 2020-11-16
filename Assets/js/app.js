// elements to be used for the code

let locationEl = document.querySelector(".location");
let dateEl = document.querySelector(".date");
let tempCEl = document.querySelector(".tempC");
let tempFEl = document.querySelector(".tempF");
let humidEl = document.querySelector(".humid");
let windEl = document.querySelector(".wind");
let iconEl = document.querySelector(".weather-icon");
let uviEl = document.querySelector(".uvI");
let descEl = document.querySelector(".wDescription");
let notifEl = document.querySelector(".notification");

let weather = {};

weather.temperature = {
    unit : "celsius"
};

// constant variables
const kelvin = 273;

// apikey
const apikey = "f30f2c88528cfea05fe2a5d9ec741999";



// check if user's browser supports geolocation
if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);
}else{
    notifEl.style.display = "block";
    notifEl.innerHTML = `<div class="alert alert-danger" role="alert">"Browser doesn't Support Geolocation: Please provide location"</div>`;
}

// loads the search history
cache.innerHTML = JSON.parse(localStorage.getItem("search"));


// user location
function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    
    getWeather(latitude, longitude);
};

// shows error if there's error with user's geolocation
function showError(error){
    notifEl.style.display = "block";
    notifEl.innerHTML = `<div class="alert alert-danger" role="alert"> ${error.message} </div>`;
};

// API fetch
function getWeather(latitude, longitude){
    let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}`;
    let apiUvi = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apikey}`;
    fetch(api)
        .then(function(response){
            let data = response.json();
            return data;

        })
        .then(function(data){
            // console.log(data);
            weather.temperature.value = Math.floor(data.main.temp - kelvin);
            weather.description = data.weather[0].description;
            weather.iconId = data.weather[0].icon;
            weather.humidity = data.main.humidity;
            weather.windspeed = data.wind.speed;
            weather.city = data.name;
            weather.country = data.sys.country;
            // console.log(data.name);
        })
        // function that outputs the data to the user
        .then(function(){
            
            displayWeather();
            displayForecast();
        })
        // then fetch for UVI
        .then(function(){}(
        fetch(apiUvi)
         .then(function(response){
            let data = response.json();
            return data;
        })
        .then(function(data){
            weather.uvi = data.current.uvi;
        })
        .then(function(){
            uviEl.innerHTML = `${weather.uvi}`;
        })
    ));
};
// converts celsius to fahrenheit
// DISPLAY WEATHER TO UI
function displayWeather(){
    let fahrenheit = (weather.temperature.value * 9/5) + 32;
    iconEl.innerHTML = `<img src="./Assets/icons/${weather.iconId}.png"/>`;
    descEl.innerHTML = `${weather.description}`;
    humidEl.innerHTML = `${weather.humidity}%`;
    windEl.innerHTML = `${weather.windspeed} mph`;
    tempCEl.innerHTML = `${weather.temperature.value}°C`;
    tempFEl.innerHTML = `${fahrenheit}°F`;
    locationEl.innerHTML = `${weather.city}, ${weather.country}`;

};

function toFahrenheit(celsius){
    return (celsius * 9/5) + 32;
}