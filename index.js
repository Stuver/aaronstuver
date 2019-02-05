window.onload = function() {

var today, week, x, action, project, dueDate, dd, et, monthAsText;

$.getJSON('https://api.airtable.com/v0/app3uhgYsJkD9JoKz/Actions?api_key=keylQW7Ohrl2hcUIF&view=Grid%20view&limit=40&sortField=dd&sortDirection=asc', function(data) {

  for (var i = 0; i < 40; i++) {
today = new Date();
today.setDate(today.getDate() - 2);
today.setHours(23);
today.setMinutes(59);
dueItem =  new Date();
dueItem.setDate(dueItem.getDate() + 7);
actItem = new Date();
actItem.setDate(actItem.getDate() + 14);
x = data.records[i].fields;
action = x.action;
project = x.project;
dueDate = Date.parse(x.dd);
dd = x.dd;
et = x.et;

var newListItem = document.createElement("div");
newListItem.className = "listItem";
var checkbox = document.createElement("input");
checkbox.type = "checkbox"
checkbox.className = "checkbox";
checkbox.id = data.records[i].id;
checkbox.addEventListener(
     'change',
     function() { tellAirtable(this); },
     false
  );
var itemDetails = document.createElement("div");
itemDetails.className = "itemDetails";
var estTime = document.createElement("p");
estTime.className = "estTime";
var h2 = document.createElement("h2");
var h3 = document.createElement("h3");
var h4 = document.createElement("h4");
var node1 = document.createTextNode(action);
var node2 = document.createTextNode(project);
var node3 = document.createTextNode(dd);
// var node4 = document.createTextNode(et);
h2.appendChild(node1);
h3.appendChild(node2);
h4.appendChild(node3);
// estTime.appendChild(node4);
itemDetails.appendChild(h2);
itemDetails.appendChild(h3);
itemDetails.appendChild(h4);
newListItem.appendChild(checkbox);
newListItem.appendChild(itemDetails);
newListItem.appendChild(estTime);

if (x.completed != true) {
  if ((dueDate >= today) && (dueDate <= dueItem)) {

var div = document.getElementById("due");
div.appendChild(newListItem);

} else if ((dueDate > today) && (dueDate <= actItem)) {

var div = document.getElementById("act");
div.appendChild(newListItem);

}
}
}
});

today = new Date();

var dayAsText;

switch (today.getDay()) {
    case 0:
        dayAsText = "Sun";
        break;
    case 1:
        dayAsText = "Mon";
        break;
    case 2:
        dayAsText = "Tues";
        break;
    case 3:
        dayAsText = "Wed";
        break;
    case 4:
        dayAsText = "Thurs";
        break;
    case 5:
        dayAsText = "Fri";
        break;
    case 6:
        dayAsText = "Sat";
}

switch (today.getMonth()) {
  case 0:
    monthAsText = "January";
    break;
  case 1:
    monthAsText = "February";
    break;
  case 2:
    monthAsText = "March";
    break;
  case 3:
    monthAsText = "April";
    break;
  case 4:
    monthAsText = "May";
    break;
  case 5:
    monthAsText = "June";
    break;
  case 6:
    monthAsText = "July";
    break;
  case 7:
    monthAsText = "August";
    break;
  case 8:
    monthAsText = "September";
    break;
  case 9:
    monthAsText = "October";
    break;
  case 10:
    monthAsText = "November";
    break;
  case 11:
    monthAsText = "December";
    break;
}

document.getElementById("headerDate").innerHTML = dayAsText + ", " + monthAsText + " " + today.getDate();
document.getElementById("notesContent").innerHTML = "";


}

function tellAirtable(checkboxElem) {
  var identity = checkboxElem.id;
  var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keylQW7Ohrl2hcUIF'}).base('app3uhgYsJkD9JoKz');

base('Actions').update(identity, {
  "completed": true
}, function(err, record) {
    if (err) { console.error(err); return; }
    console.log(record.get('completed'));
});

}
