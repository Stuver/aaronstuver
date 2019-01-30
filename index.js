 window.onload = function() {


var assignments;
assignments = {

   "assignment1": {
      "action": "Homework 2",
      "project": "LING 2367.01",
      "assigned date": "21-Feb",
      "dd": "2/28/18",
      "et": null,
      "completed": true
   },
   "assignment2": {
      "action": "Quiz: Consumer Culture",
      "project": "DS 2750",
      "assigned date": "27-Feb",
      "dd": "3/1/18",
      "et": null,
      "completed": true
   },
   "assignment3": {
      "action": "Homework 4",
      "project": "ISE 3700",
      "assigned date": "22-Feb",
      "dd": "3/1/18",
      "et": null,
      "completed": true
   },
   "assignment4": {
      "action": "Assignment 2",
      "project": "DS 2330",
      "assigned date": "16-Feb",
      "dd": "3/2/18",
      "et": null,
      "completed": true
   },
   "assignment5": {
      "action": "Timeline Comparison",
      "project": "DS 2750",
      "assigned date": "27-Feb",
      "dd": "3/6/18",
      "et": 1.5,
      "completed": true
   },
   "assignment6": {
      "action": "Read Dekker 3",
      "project": "ISE 3700",
      "assigned date": "1-Mar",
      "dd": "3/8/18",
      "et": 0.5,
      "completed": true
   },
   "assignment7": {
      "action": "Homework 5",
      "project": "ISE 3700",
      "assigned date": "1-Mar",
      "dd": "3/8/18",
      "et": 1,
      "completed": true
   },
   "assignment8": {
      "action": "Assignment 2",
      "project": "DS 2130",
      "assigned date": "13-Feb",
      "dd": "3/8/18",
      "et": 3,
      "completed": true
   },
   "assignment9": {
      "action": "Annotated Bibliography",
      "project": "LING 2367.01",
      "assigned date": "1-Mar",
      "dd": "3/8/18",
      "et": 3,
      "completed": true
   },
   "assignment10": {
      "action": "Exercise 7",
      "project": "DS 2330",
      "assigned date": "7-Mar",
      "dd": "3/9/18",
      "et": 1,
      "completed": true
   },
   "assignment11": {
      "action": "Gift Exercise",
      "project": "DS 2130",
      "assigned date": "8-Mar",
      "dd": "3/20/18",
      "et": 0.5,
      "completed": true
   },
   "assignment12": {
      "action": "Read Dekker 4",
      "project": "ISE 3700",
      "assigned date": "13-Mar",
      "dd": "3/20/18",
      "et": 0.5,
      "completed": true
   },
   "assignment13": {
      "action": "Homework 6",
      "project": "ISE 3700",
      "assigned date": "13-Mar",
      "dd": "3/20/18",
      "et": 1,
      "completed": true
   },
   "assignment14": {
      "action": "Zimman 2013",
      "project": "LING 2367.01",
      "assigned date": "13-Mar",
      "dd": "3/20/18",
      "et": 1,
      "completed": true
   },
   "assignment15": {
      "action": "Exercise 8",
      "project": "DS 2330",
      "assigned date": "9-Mar",
      "dd": "3/21/18",
      "et": 1,
      "completed": true
   },
   "assignment16": {
      "action": "Quiz: Bauhaus",
      "project": "DS 2750",
      "assigned date": "20-Mar",
      "dd": "3/22/18",
      "et": 0.25,
      "completed": true
   },
   "assignment17": {
      "action": "Read Handout CH24",
      "project": "ISE 3700",
      "assigned date": "15-Mar",
      "dd": "3/22/18",
      "et": 0.5,
      "completed": false
   },
   "assignment18": {
      "action": "Levon 2013",
      "project": "LING 2367.01",
      "assigned date": "15-Mar",
      "dd": "3/22/18",
      "et": 1,
      "completed": true
   },
   "assignment19": {
      "action": "Exercise 9",
      "project": "DS 2330",
      "assigned date": "21-Mar",
      "dd": "3/23/18",
      "et": 0.25,
      "completed": true
   },
   "assignment20": {
      "action": "Read JCS Book 1, 2, 12",
      "project": "ISE 3700",
      "assigned date": "20-Mar",
      "dd": "3/27/18",
      "et": 0.5,
      "completed": false
   },
   "assignment21": {
      "action": "Miller and James 2009",
      "project": "LING 2367.01",
      "assigned date": "20-Mar",
      "dd": "3/27/18",
      "et": 1,
      "completed": true
   },
   "assignment22": {
      "action": "Homework 3",
      "project": "LING 2367.01",
      "assigned date": "21-Mar",
      "dd": "3/28/18",
      "et": 1,
      "completed": true
   },
   "assignment23": {
      "action": "Read JCS Book 3, 4",
      "project": "ISE 3700",
      "assigned date": "22-Mar",
      "dd": "3/29/18",
      "et": 0.5,
      "completed": false
   },
   "assignment24": {
      "action": "Homework 7",
      "project": "ISE 3700",
      "assigned date": "22-Mar",
      "dd": "4/5/18",
      "et": 1,
      "completed": true
   },
   "assignment26": {
      "action": "Stout and Dasgupta",
      "project": "LING 2367.01",
      "assigned date": "22-Mar",
      "dd": "3/29/18",
      "et": 1,
      "completed": true
   },
   "assignment27": {
      "action": "Read Klein et al",
      "project": "ISE 3700",
      "assigned date": "27-Mar",
      "dd": "4/3/18",
      "et": 0.5,
      "completed": false
   },
   "assignment28": {
      "action": "Research Paper Draft 1",
      "project": "LING 2367.01",
      "assigned date": "27-Mar",
      "dd": "4/5/18",
      "et": 3,
      "completed": true
   },
   "assignment29": {
      "action": "Read JCS 7, 8",
      "project": "ISE 3700",
      "assigned date": "29-Mar",
      "dd": "4/5/18",
      "et": 0.5,
      "completed": false
   },
   "assignment31": {
      "action": "Bjorkman 2017",
      "project": "LING 2367.01",
      "assigned date": "29-Mar",
      "dd": "4/3/18",
      "et": 1,
      "completed": true
   },
   "assignment32": {
      "action": "Assignment 3",
      "project": "DS 2330",
      "assigned date": "23-Mar",
      "dd": "4/6/18",
      "et": 5,
      "completed": true
   },
   "assignment33": {
      "action": "Rose 2015",
      "project": "LING 2367.01",
      "assigned date": "3-Apr",
      "dd": "4/10/18",
      "et": 1,
      "completed": true
   },
   "assignment34": {
      "action": "Assignment 3",
      "project": "DS 2130",
      "assigned date": "6-Mar",
      "dd": "4/12/18",
      "et": 10,
      "completed": false
   },
   "assignment47": {
   	"action": "Research Presentation",
   	"project": "LING 2367.01",
   	"assigned date": "29-Mar",
   	"dd": "4/12/18",
   	"et": 3,
   	"completed": false
   },
   "assignment35": {
      "action": "Bonus Contributions",
      "project": "DS 2750",
      "assigned date": "5-Apr",
      "dd": "4/12/18",
      "et": 0.5,
      "completed": true
   },
   "assignment36": {
      "action": "Read JCS 5, 6",
      "project": "ISE 3700",
      "assigned date": "5-Apr",
      "dd": "4/12/18",
      "et": 0.5,
      "completed": false
   },
   "assignment37": {
      "action": "Research Paper Draft 2",
      "project": "LING 2367.01",
      "assigned date": "5-Apr",
      "dd": "4/12/18",
      "et": 3,
      "completed": false
   },
   "assignment25": {
      "action": "Homework 8",
      "project": "ISE 3700",
      "assigned date": "22-Mar",
      "dd": "4/19/18",
      "et": 1,
      "completed": false
   },
   "assignment38": {
      "action": "Read JCS 11",
      "project": "ISE 3700",
      "assigned date": "12-Apr",
      "dd": "4/19/18",
      "et": 0.5,
      "completed": false
   },
   "assignment39": {
      "action": "Homework 10",
      "project": "ISE 3700",
      "assigned date": "12-Apr",
      "dd": "4/19/18",
      "et": 1,
      "completed": false
   },
   "assignment40": {
      "action": "Homework 4",
      "project": "LING 2367.01",
      "assigned date": "12-Apr",
      "dd": "4/19/18",
      "et": 1,
      "completed": false
   },
   "assignment41": {
      "action": "Portfolio",
      "project": "Professional",
      "assigned date": "16-Apr",
      "dd": "4/23/18",
      "et": 10,
      "completed": false
   },
   "assignment42": {
      "action": "Assignment 4",
      "project": "DS 2330",
      "assigned date": "13-Apr",
      "dd": "4/23/18",
      "et": 5,
      "completed": false
   },
   "assignment43": {
      "action": "Final Project",
      "project": "ISE 3700",
      "assigned date": "16-Apr",
      "dd": "4/23/18",
      "et": 5,
      "completed": false
   },
   "assignment30": {
      "action": "Homework 9",
      "project": "ISE 3700",
      "assigned date": "29-Mar",
      "dd": "4/25/18",
      "et": 1,
      "completed": false
   },
   "assignment44": {
      "action": "Resarch Paper Final",
      "project": "LING 2367.01",
      "assigned date": "19-Apr",
      "dd": "4/26/18",
      "et": 3,
      "completed": false
   },
   "assignment45": {
      "action": "Point of View Essay",
      "project": "DS 2750",
      "assigned date": "23-Apr",
      "dd": "4/30/18",
      "et": 2,
      "completed": false
   },
   "assignment46": {
    "action": "Glossary Review",
    "project": "ISE 3700",
    "assigned date": "25-Mar",
    "dd": "3/29/18",
    "et": 2,
    "completed": true
  },
  "assignment47": {
    "action": "Practical Guide Ch. 1",
    "project": "DS RES",
    "assigned date": "23-Aug",
    "dd": "8/28/18",
    "et": .5,
    "completed": false
  },
  "assignment48": {
    "action": "Res for Des Pre - Ch.2",
    "project": "DS RES",
    "assigned date": "23-Aug",
    "dd": "8/28/18",
    "et": .5,
    "completed": false
  },
  "assignment49": {
    "action": "Universal Methods 53, 74",
    "project": "DS RES",
    "assigned date": "23-Aug",
    "dd": "8/28/18",
    "et": .5,
    "completed": false
  },
  "assignment50": {
    "action": "Practical Guide Ch. 2",
    "project": "DS RES",
    "assigned date": "28-Aug",
    "dd": "8/30/18",
    "et": .5,
    "completed": false
  },
  "assignment51": {
    "action": "Res for Des Ch. 2",
    "project": "DS RES",
    "assigned date": "28-Aug",
    "dd": "8/30/18",
    "et": .5,
    "completed": false
  },
  "assignment52": {
    "action": "Secondary Research: Problem Space",
    "project": "DS RES",
    "assigned date": "23-Aug",
    "dd": "8/28/18",
    "et": .5,
    "completed": false
  },
  "assignment53": {
    "action": "Participant Ciriteria & Research Qs",
    "project": "DS RES",
    "assigned date": "28-Aug",
    "dd": "8/30/18",
    "et": .5,
    "completed": false
  },
  "assignment54": {
    "action": "400 Ellipses",
    "project": "DS 3301",
    "assigned date": "23-Aug",
    "dd": "8/28/18",
    "et": 3,
    "completed": false
  },
  "assignment55": {
    "action": "Printers",
    "project": "DS 3301",
    "assigned date": "23-Aug",
    "dd": "8/28/18",
    "et": .5,
    "completed": true
  },
  "assignment56": {
    "action": "Mouse Box",
    "project": "DS CAD",
    "assigned date": "23-Aug",
    "dd": "8/28/18",
    "et": 2,
    "completed": false
  },
  "assignment57": {
    "action": "Arch Tour",
    "project": "Art Hist",
    "assigned date": "23-Aug",
    "dd": "9/12/18",
    "et": 1,
    "completed": false
  },
  "assignment58": {
    "action": "Paper: Define ID",
    "project": "DS 3101",
    "assigned date": "23-Aug",
    "dd": "9/4/18",
    "et": 3,
    "completed": false
  },
  "assignment59": {
    "action": "Macroscope 1",
    "project": "Dig Hist",
    "assigned date": "24-Aug",
    "dd": "8/29/18",
    "et": .5,
    "completed": false
  },
  "assignment60": {
    "action": "Macroscope 2",
    "project": "Dig Hist",
    "assigned date": "29-Aug",
    "dd": "8/31/18",
    "et": .5,
    "completed": false
  }
}

var today, week, x, action, project, dueDate, dd, et, monthAsText;

for (i in assignments) {

today = new Date();
today.setDate(today.getDate() - 1);
today.setHours(23);
today.setMinutes(59);
dueItem =  new Date();
dueItem.setDate(dueItem.getDate() + 7);
actItem = new Date();
actItem.setDate(actItem.getDate() + 14);
x = assignments[i];
action = x.action;
project = x.project;
dueDate = Date.parse(x.dd);
dd = x.dd;
et = x.et;

var newListItem = document.createElement("div");
newListItem.className = "listItem";
var checkbox = document.createElement("div");
checkbox.className = "checkbox";
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
var node4 = document.createTextNode(et);
h2.appendChild(node1);
h3.appendChild(node2);
h4.appendChild(node3);
estTime.appendChild(node4);
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
