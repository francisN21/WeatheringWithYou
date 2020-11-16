let london = document.getElementById(`London`);
let sidney = document.getElementById(`Sidney`);
let tokyo = document.getElementById(`Tokyo`);
let ph = document.getElementById(`Philippines`);
let cache = document.getElementById(`cache`);

london.addEventListener('click', function (e) {
    e.preventDefault();
    button("london");
});

sidney.addEventListener('click', function (e) {
    e.preventDefault();
    button("Sidney");
});
tokyo.addEventListener('click', function (e) {
    e.preventDefault();
    button("Tokyo");
});
ph.addEventListener('click', function (e) {
    e.preventDefault();
    button("Philippines");
});

cache.addEventListener('click', function (e) {
    e.preventDefault();
    button(`${JSON.parse(localStorage.getItem("search"))}`);
});


function button(saveLocation){

    let apisearch = `https://api.openweathermap.org/data/2.5/weather?q=${saveLocation}&appid=${apikey}`;
    
fetch(apisearch)
    .then(function(response){
        let data = response.json();
        return data;

    })
    .then(function(data){
        weather.temperature.value = Math.floor(data.main.temp - kelvin);
        weather.description = data.weather[0].description;
        weather.iconId = data.weather[0].icon;
        weather.humidity = data.main.humidity;
        weather.windspeed = data.wind.speed;
        weather.city = data.name;
        weather.country = data.sys.country;
        weather.lat = data.coord.lat;
        weather.lon = data.coord.lon;

    })
    // function that outputs the data to the user
    .then(function(){
        displayWeather();
        displayForecast();
        // UVIndex search
        notifEl.innerHTML = `<div class="alert alert-success" role="alert"> Success! </div>`;
        apiUvi = `https://api.openweathermap.org/data/2.5/onecall?lat=${weather.lat}&lon=${weather.lon}&appid=${apikey}`;
        
        (fetch(apiUvi)
        .then(function(response){
           let data = response.json();
           return data;
    
       })
       .then(function(data){
           weather.uvi = data.current.uvi;
       })
       .then(function(){
           uviEl.innerHTML = `${weather.uvi}`;
       }));

    });

}