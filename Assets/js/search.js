// search button
let inputEl = document.getElementById('userInput');
let searchbutton = document.getElementById('searchBtn')

searchbutton.addEventListener('click', function (e) {
    e.preventDefault();
    let userLocation = inputEl.value;

    let apisearch = `http://api.openweathermap.org/data/2.5/weather?q=${userLocation}&appid=${apikey}`;
    
fetch(apisearch)
    .then(function(response){
        let data = response.json();
        return data;

    })
    .then(function(data){
        console.log(data);
        weather.temperature.value = Math.floor(data.main.temp - kelvin);
        weather.description = data.weather[0].description;
        weather.iconId = data.weather[0].icon;
        weather.humidity = data.main.humidity;
        weather.windspeed = data.wind.speed;
        weather.city = data.name;
        weather.country = data.sys.country;
        
    })
    // function that outputs the data to the user
    .then(function(){
        
        displayWeather();
    });

    console.log(userLocation);
});


