// query selector for the 5 day forecast
let day1 = document.getElementById(`date1`);
let icon1 = document.querySelector(".icon1");
let temp1 = document.querySelector(".tempC1");
let tempF1 = document.querySelector(".tempF1");
let humid1 = document.querySelector(".humid1");
let wind1 = document.querySelector(".wind1");

let day2 = document.getElementById(`date2`);
let icon2 = document.querySelector(".icon2");
let temp2 = document.querySelector(".tempC2");
let tempF2 = document.querySelector(".tempF2");
let humid2 = document.querySelector(".humid2");
let wind2 = document.querySelector(".wind2");

let day3 = document.getElementById(`date3`);
let icon3 = document.querySelector(".icon3");
let temp3 = document.querySelector(".tempC3");
let tempF3 = document.querySelector(".tempF3");
let humid3 = document.querySelector(".humid3");
let wind3 = document.querySelector(".wind3");

let day4 = document.getElementById(`date4`);
let icon4 = document.querySelector(".icon4");
let temp4 = document.querySelector(".tempC4");
let tempF4 = document.querySelector(".tempF4");
let humid4 = document.querySelector(".humid4");
let wind4 = document.querySelector(".wind4");

let day5 = document.getElementById(`date5`);
let icon5 = document.querySelector(".icon5");
let temp5 = document.querySelector(".tempC5");
let tempF5 = document.querySelector(".tempF5");
let humid5 = document.querySelector(".humid5");
let wind5 = document.querySelector(".wind5");


function displayForecast(){
    let apiforecast = `https://api.openweathermap.org/data/2.5/forecast?q=${weather.city}&appid=${apikey}`;
    
fetch(apiforecast)
    .then(function(responseF){
        let dataF = responseF.json();
        return dataF;
    })
    .then(function(dataF){
        weather.dayA = dataF.list[3].dt_txt;
        weather.icon1 = dataF.list[3].weather[0].icon;
        weather.temp1 = Math.floor(dataF.list[3].main.temp - kelvin);
        weather.humid1 = dataF.list[3].main.humidity;
        weather.wind1 = dataF.list[3].wind.speed;

        weather.dayB = dataF.list[11].dt_txt;
        weather.icon2 = dataF.list[11].weather[0].icon;
        weather.temp2 = Math.floor(dataF.list[11].main.temp - kelvin);
        weather.humid2 = dataF.list[11].main.humidity;
        weather.wind2 = dataF.list[11].wind.speed;

        weather.dayC = dataF.list[19].dt_txt;
        weather.icon3 = dataF.list[19].weather[0].icon;
        weather.temp3 = Math.floor(dataF.list[19].main.temp - kelvin);
        weather.humid3 = dataF.list[19].main.humidity;
        weather.wind3 = dataF.list[19].wind.speed;

        weather.dayD = dataF.list[27].dt_txt;
        weather.icon4 = dataF.list[27].weather[0].icon;
        weather.temp4 = Math.floor(dataF.list[27].main.temp - kelvin);
        weather.humid4 = dataF.list[27].main.humidity;
        weather.wind4 = dataF.list[27].wind.speed;

        weather.dayE = dataF.list[35].dt_txt;
        weather.icon5 = dataF.list[35].weather[0].icon;
        weather.temp5 = Math.floor(dataF.list[35].main.temp - kelvin);
        weather.humid5 = dataF.list[35].main.humidity;
        weather.wind5 = dataF.list[35].wind.speed;


    })
    // function that outputs the data to the user
    .then(function(){
        appendForecast();
    });

};
// to convert to °F
function toFahrenheit(celsius){
    return (celsius * 9/5) + 32;
}

function appendForecast(){
    day1.innerHTML = `${weather.dayA}`;
    icon1.innerHTML = `<img src="./Assets/icons/${weather.icon1}.png"/>`;
    temp1.innerHTML = `${weather.temp1}°C`;
    tempF1.innerHTML = `${toFahrenheit(weather.temp1)}°F`;
    humid1.innerHTML = `${weather.humid1}%`;
    wind1.innerHTML = `${weather.wind1}mph`;

    day2.innerHTML = `${weather.dayB}`;
    icon2.innerHTML = `<img src="./Assets/icons/${weather.icon2}.png"/>`;
    temp2.innerHTML = `${weather.temp2}°C`;
    tempF2.innerHTML = `${toFahrenheit(weather.temp2)}°F` ;
    humid2.innerHTML = `${weather.humid2}%`;
    wind2.innerHTML = `${weather.wind2}mph`;

    day3.innerHTML = `${weather.dayC}`;
    icon3.innerHTML = `<img src="./Assets/icons/${weather.icon3}.png"/>`;
    temp3.innerHTML = `${weather.temp3}°C`;
    tempF3.innerHTML = `${toFahrenheit(weather.temp3)}°F` ;
    humid3.innerHTML = `${weather.humid3}%`;
    wind3.innerHTML = `${weather.wind3}mph`;

    day4.innerHTML = `${weather.dayD}`;
    icon4.innerHTML = `<img src="./Assets/icons/${weather.icon4}.png"/>`;
    temp4.innerHTML = `${weather.temp4}°C`;
    tempF4.innerHTML = `${toFahrenheit(weather.temp4)}°F` ;
    humid4.innerHTML = `${weather.humid4}%`;
    wind4.innerHTML = `${weather.wind4}mph`;

    day5.innerHTML = `${weather.dayE}`;
    icon5.innerHTML = `<img src="./Assets/icons/${weather.icon5}.png"/>`;
    temp5.innerHTML = `${weather.temp5}°C`;
    tempF5.innerHTML = `${toFahrenheit(weather.temp5)}°F` ;
    humid5.innerHTML = `${weather.humid5}%`;
    wind5.innerHTML = `${weather.wind5}mph`;
};