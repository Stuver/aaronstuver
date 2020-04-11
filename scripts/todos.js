function func1() {

  // var today, week, x, action, project, dueDate, dd, et, monthAsText;

  var card, name, course, project = ""

  var getItems = 200;

  $.getJSON('https://api.airtable.com/v0/appqQpMi2KR6naxTC/Actions?api_key=keylQW7Ohrl2hcUIF&view=Due%20This%20Week&limit=99&sortField=dueDate&sortDirection=asc', function(action) {

    for (var i = 0; i < action.records.length; i++) {
      card = action.records[i].fields;
      name = action.records[i].fields.name;
      course = action.records[i].fields.course;
      project = action.records[i].fields.projects;
      id = action.records[i].id;

      var newAction = document.createElement("div");
      newAction.className = "action";
      newAction.id = id;
      var newActionName = document.createElement("h2");
      newAction.appendChild(newActionName);
      var newActionLabel = document.createElement("div");
      newActionLabel.className = "flex-container";
      var newActionCourse = document.createElement("h3");
      newActionLabel.appendChild(newActionCourse);
      var newActionProject = document.createElement("h4");
      newActionLabel.appendChild(newActionProject);
      newAction.appendChild(newActionLabel);

      var div = document.getElementById("actions");
      div.appendChild(newAction);

      document.getElementById(id).children[0].innerHTML = name;

      // $.getJSON('https://api.airtable.com/v0/appqQpMi2KR6naxTC/Responsibilities?api_key=keylQW7Ohrl2hcUIF&view=Grid%20view&limit=99&sortField=name&sortDirection=asc', function(data) {
      //   for (var j = 0; j < data.records.length; j++) {
      //     if (course == data.records[j].id) {
      //       course = data.records[j].fields.name;
      //       document.getElementById(id).children[1].children[0].innerHTML = course;
      //     }
      //   }
      // });

      $.getJSON('https://api.airtable.com/v0/appqQpMi2KR6naxTC/Projects?api_key=keylQW7Ohrl2hcUIF&view=By%20Responsibility&limit=99&sortField=name&sortDirection=asc', function(data) {
        for (var k = 0; k < data.records.length; k++) {
          if (project == data.records[k].id) {
            project = data.records[k].fields.name;
            document.getElementById(id).children[1].children[1].innerHTML = project;
          }
        }
      });
    }
  });

  $.getJSON('https://api.airtable.com/v0/appqQpMi2KR6naxTC/Projects?api_key=keylQW7Ohrl2hcUIF&view=Due%20This%20Week&limit=99&sortField=dueDate&sortDirection=asc', function(data) {

    for (var i = 0; i < data.records.length; i++) {
      card = data.records[i].fields;
      name = data.records[i].fields.name;
      course = data.records[i].fields.course;
      id = data.records[i].id;

      var newAction = document.createElement("div");
      newAction.className = "action";
      newAction.id = id;
      var newActionName = document.createElement("h2");
      newAction.appendChild(newActionName);
      var newActionLabel = document.createElement("div");
      newActionLabel.className = "flex-container";
      var newActionCourse = document.createElement("h3");
      newActionLabel.appendChild(newActionCourse);
      var newActionProject = document.createElement("h4");
      newActionLabel.appendChild(newActionProject);
      newAction.appendChild(newActionLabel);

      var div = document.getElementById("actions");
      div.appendChild(newAction);

      document.getElementById(id).children[0].innerHTML = name;

      $.getJSON('https://api.airtable.com/v0/appqQpMi2KR6naxTC/Responsibilities?api_key=keylQW7Ohrl2hcUIF&view=Grid%20view&limit=99&sortField=name&sortDirection=asc', function(data) {
        for (var j = 0; j < data.records.length; j++) {
          if (course == data.records[j].id) {
            course = data.records[j].fields.name;
            document.getElementById(id).children[1].children[0].innerHTML = course;
          }
        }
      });

      // $.getJSON('https://api.airtable.com/v0/appqQpMi2KR6naxTC/Projects?api_key=keylQW7Ohrl2hcUIF&view=By%20Responsibility&limit=99&sortField=name&sortDirection=asc', function(data) {
      //   for (var k = 0; k < data.records.length; k++) {
      //     if (project == data.records[k].id) {
      //       project = data.records[k].fields.name;
      //       document.getElementById(id).children[1].children[1].innerHTML = project;
      //     }
      //   }
      // });
    }
  });

}




//
//   for (var i = 0; i < 99; i++) {
// today = new Date();
// today.setDate(today.getDate() - 1);
// today.setHours(23);
// today.setMinutes(59);
// dueItem =  new Date();
// dueItem.setDate(dueItem.getDate() + 7);
// actItem = new Date();
// actItem.setDate(actItem.getDate() + 14);
// x = data.records[i].fields;
// action = x.action;
// project = x.project;
// dueDate = Date.parse(x.dd);
// dd = x.dd;
// et = x.et;
//
// var newListItem = document.createElement("div");
// newListItem.className = "listItem";
// var checkbox = document.createElement("input");
// checkbox.type = "checkbox"
// checkbox.className = "checkbox";
// checkbox.id = data.records[i].id;
// checkbox.addEventListener(
//      'change',
//      function() { tellAirtable(this); },
//      false
//   );
// var itemDetails = document.createElement("div");
// itemDetails.className = "itemDetails";
// var estTime = document.createElement("p");
// estTime.className = "estTime";
// var h2 = document.createElement("h2");
// var h3 = document.createElement("h3");
// var h4 = document.createElement("h4");
// var node1 = document.createTextNode(action);
// var node2 = document.createTextNode(project);
// var node3 = document.createTextNode(dd);
// // var node4 = document.createTextNode(et);
// h2.appendChild(node1);
// h3.appendChild(node2);
// h4.appendChild(node3);
// // estTime.appendChild(node4);
// itemDetails.appendChild(h2);
// itemDetails.appendChild(h3);
// itemDetails.appendChild(h4);
// newListItem.appendChild(checkbox);
// newListItem.appendChild(itemDetails);
// newListItem.appendChild(estTime);
//
// if (x.completed != true) {
//   if (dueDate <= dueItem) {
//
// var div = document.getElementById("due");
// div.appendChild(newListItem);
//
// } else if ((dueDate > today) && (dueDate <= actItem)) {
//
// var div = document.getElementById("act");
// div.appendChild(newListItem);
//
// }
// }
// }
// });
//
// }
//
// function tellAirtable(checkboxElem) {
//   var identity = checkboxElem.id;
//   var Airtable = require('airtable');
// var base = new Airtable({apiKey: 'keylQW7Ohrl2hcUIF'}).base('app3uhgYsJkD9JoKz');
//
// base('Actions').update(identity, {
//   "completed": true
// }, function(err, record) {
//     if (err) { console.error(err); return; }
//     console.log(record.get('completed'));
// });
//
// }
