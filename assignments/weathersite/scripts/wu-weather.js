var weatherObject = new XMLHttpRequest();

weatherObject.open('GET', 'http://api.wunderground.com/api/709baeaee109a2b7/conditions/q/MN/Franklin.json', true);

weatherObject.send();

weatherObject.onload = function() {
    
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
    
    document.getElementById('place').innerHTML = weatherInfo.current_observation.display_location.full;
    
    document.getElementById('currentTemp').innerHTML = weatherInfo.current_observation.temp_f;
    
    document.getElementById('w_icon').src = weatherInfo.current_observation.icon_url;
    
    document.getElementById('currentRain').innerHTML = weatherInfo.current_observation.precip_1hr_in;
    
    document.getElementById('currentWind').innerHTML = weatherInfo.current_observation.wind_gust_mph;
    
    document.getElementById('currentChill').innerHTML = weatherInfo.current_observation.windchill_f;
    
    document.getElementById('currentCond').innerHTML = weatherInfo.current_observation.weather;
    
}