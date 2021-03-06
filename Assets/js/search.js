// search button
let inputEl = document.getElementById('userInput');
let searchbutton = document.getElementById('searchBtn');

searchbutton.addEventListener('click', function (e) {
    e.preventDefault();
    let userLocation = inputEl.value;

    let apisearch = `https://api.openweathermap.org/data/2.5/weather?q=${userLocation}&appid=${apikey}`;
    
fetch(apisearch)
    .then(function(response){
        let data = response.json();
        // console.log(response.status)
        if (response.status !== 200) {
            // Place the response.status on the page.
            notifEl.innerHTML = `<div class="alert alert-danger" role="alert">"Please provide a VALID location"</div>`;
          }
          else{
            localStorage.setItem("search", JSON.stringify(inputEl.value));
            let searchHistory = JSON.parse(localStorage.getItem("search"));
            // loads the search history
            cache.innerHTML = JSON.parse(localStorage.getItem("search"));
            console.log(searchHistory);
          };
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
});
