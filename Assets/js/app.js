// elements to be used for the code

let locationEl = document.querySelector(".location");
let dateEl = document.querySelector(".date");
let tempCEl = document.querySelector(".tempC");
let temFEl = document.querySelector(".tempF");
let uviEl = document.querySelector(".uvI");
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
    notifEl.innerHTML = "Browser doesn't Support Geolocation: Please provide location";
}

// user location
function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    
    getWeather(latitude, longitude);
}

// shows error if there's error with user's geolocation
function showError(error){
    notifEl.style.display = "block";
    notifEl.innerHTML = `<p> ${error.message} </p>`;
}