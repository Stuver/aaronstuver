function func2() {

var todaysWeather, tomorrowsWeather;

$.getJSON('https://api.weather.gov/gridpoints/ILN/84,82/forecast', function(data) {

todaysWeather = data.properties.periods[0].detailedForecast;
tonightsWeather = data.properties.periods[1].detailedForecast;
tomorrowsWeather = data.properties.periods[2].detailedForecast;

document.getElementById("todaysWeather").innerHTML = todaysWeather;
document.getElementById("todaysWeatherName").innerHTML = data.properties.periods[0].name + ", ";

});
}
