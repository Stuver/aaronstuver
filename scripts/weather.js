window.onload = function() {

var todaysWeather, tomorrowsWeather;

$.getJSON('https://api.weather.gov/gridpoints/ILN/84,82/forecast', function(data) {

todaysWeather = data.properties.periods[0].detailedForecast;
tonightsWeather = data.properties.periods[1].detailedForecast;
tomorrowsWeather = data.properties.periods[2].detailedForecast;

document.getElementById("todaysWeather").innerHTML = todaysWeather;

});


var card, name, course, project

var getItems = 200;

$.getJSON('https://api.airtable.com/v0/appqQpMi2KR6naxTC/Actions?api_key=keylQW7Ohrl2hcUIF&view=Due%20This%20Week&limit=99&sortField=dueDate&sortDirection=asc', function(action) {

  for (var i = 0; i < action.records.length; i++) {
    card = action.records[i].fields;
    name = action.records[i].fields.name;
    course = action.records[i].fields.course;
    project = action.records[i].fields.projects;

    console.log(course + " " + project);

    $.getJSON('https://api.airtable.com/v0/appqQpMi2KR6naxTC/Responsibilities?api_key=keylQW7Ohrl2hcUIF&view=Grid%20view&limit=99&sortField=name&sortDirection=asc', function(responsibility) {
      for (var i = 0; i < responsibility.records.length; i++) {
        if (course == responsibility.records[i].id) {
          course = responsibility.records[i].fields.name;
        }
      }
    });

    $.getJSON('https://api.airtable.com/v0/appqQpMi2KR6naxTC/Projects?api_key=keylQW7Ohrl2hcUIF&view=By%20Responsibility&limit=99&sortField=name&sortDirection=asc', function(projects) {
      for (var i = 0; i < projects.records.length; i++) {
        if (project == projects.records[i].id) {
          project = projects.records[i].fields.name;
        }
      }
    });

    console.log(course + " " + project);

    switch (i) {
      case 0:
      document.getElementById("taskOneName").innerHTML = name;
      document.getElementById("taskOneCourse").innerHTML = course;
      document.getElementById("taskOneProject").innerHTML = project;
      break;

      case 1:
      document.getElementById("taskTwoName").innerHTML = name;
      document.getElementById("taskTwoCourse").innerHTML = course;
      document.getElementById("taskTwoProject").innerHTML = project;
      break;
    }
  }
});


}
