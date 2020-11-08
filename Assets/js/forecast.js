function displayForecast(){
    let apiforecast = `http://api.openweathermap.org/data/2.5/forecast?q=${weather.city}&appid=${apikey}`;
    
fetch(apiforecast)
    .then(function(responseF){

        let dataF = responseF.json();
        console.log(responseF)
        return dataF;
    })
    .then(function(dataF){
        console.log(dataF);

        
    })
    // function that outputs the data to the user
    .then(function(){
        
        // displayWeather();

    })

}