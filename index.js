window.onload = function() {

  var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keylQW7Ohrl2hcUIF'}).base('app3uhgYsJkD9JoKz');

base('Actions').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 3,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        console.log('Retrieved', record.get('key'));
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});

var assignments = {
   "assignment29": {
      "action": "Project 1 Crit",
      "project": "Jenny",
      "assigned date": "8-Jan",
      "dd": "2/7/19",
      "et": "",
      "completed": false
   },
   "assignment39": {
      "action": "Personal Essay: The Death and Life of Great American Cities",
      "project": "Sebastien",
      "assigned date": "8-Jan",
      "dd": "4/18/19",
      "et": "",
      "completed": false
   },
   "assignment40": {
      "action": "R2",
      "project": "Alex and Vita",
      "assigned date": "14-Jan",
      "dd": "1/28/19",
      "et": "",
      "completed": false
   },
   "assignment41": {
      "action": "SP2",
      "project": "Alex and Vita",
      "assigned date": "14-Jan",
      "dd": "1/28/19",
      "et": "",
      "completed": false
   },
   "assignment42": {
      "action": "Tilt Brush",
      "project": "Alex and Vita",
      "assigned date": "14-Jan",
      "dd": "2/4/19",
      "et": "",
      "completed": false
   },
   "assignment53": {
      "action": "A2: Syllabus Review",
      "project": "Dr. Campbell",
      "assigned date": "14-Jan",
      "dd": "1/20/19",
      "et": "",
      "completed": true
   },
   "assignment67": {
      "action": "Quiz 2: Unit 2",
      "project": "Dr. Campbell",
      "assigned date": "14-Jan",
      "dd": "1/20/19",
      "et": "",
      "completed": true
   },
   "assignment78": {
      "action": "Read Unit 2: Eating, Digestion",
      "project": "Dr. Campbell",
      "assigned date": "14-Jan",
      "dd": "1/20/19",
      "et": "",
      "completed": true
   },
   "assignment97": {
      "action": "Progress 1",
      "project": "John",
      "assigned date": "14-Jan",
      "dd": "1/20/19",
      "et": "",
      "completed": true
   },
   "assignment1": {
      "action": "Reading: Aretino's Attack on Michelangelo",
      "project": "Julie Dentzer",
      "assigned date": "15-Jan",
      "dd": "1/17/19",
      "et": "",
      "completed": false
   },
   "assignment21": {
      "action": "Develop concepts using C-K Theory",
      "project": "Jenny",
      "assigned date": "15-Jan",
      "dd": "1/17/19",
      "et": "",
      "completed": true
   },
   "assignment2": {
      "action": "Reading: Luther's Position on Images",
      "project": "Julie Dentzer",
      "assigned date": "17-Jan",
      "dd": "1/24/19",
      "et": "",
      "completed": true
   },
   "assignment3": {
      "action": "Reading: Council of Trent on Religious Art",
      "project": "Julie Dentzer",
      "assigned date": "17-Jan",
      "dd": "1/24/19",
      "et": "",
      "completed": false
   },
   "assignment22": {
      "action": "Preliminary C-K map review",
      "project": "Jenny",
      "assigned date": "17-Jan",
      "dd": "1/22/19",
      "et": "",
      "completed": true
   },
   "assignment54": {
      "action": "A3: Diet Analysis Project Introdution Review",
      "project": "Dr. Campbell",
      "assigned date": "21-Jan",
      "dd": "1/27/19",
      "et": "",
      "completed": false
   },
   "assignment68": {
      "action": "Quiz 3: Project Intro",
      "project": "Dr. Campbell",
      "assigned date": "21-Jan",
      "dd": "1/27/19",
      "et": "",
      "completed": true
   },
   "assignment79": {
      "action": "Read Unit 3: Macronutrients",
      "project": "Dr. Campbell",
      "assigned date": "21-Jan",
      "dd": "1/27/19",
      "et": "",
      "completed": false
   },
   "assignment98": {
      "action": "Progress 2",
      "project": "John",
      "assigned date": "21-Jan",
      "dd": "1/27/19",
      "et": "",
      "completed": false
   },
   "assignment23": {
      "action": "Develop concepts using C-K Theory",
      "project": "Jenny",
      "assigned date": "22-Jan",
      "dd": "1/24/19",
      "et": "",
      "completed": true
   },
   "assignment24": {
      "action": "Reading: Cristensen, Disruptive Innovation",
      "project": "Sebastien",
      "assigned date": "22-Jan",
      "dd": "1/24/19",
      "et": "",
      "completed": true
   },
   "assignment19": {
      "action": "Carmen: Tweeting About Iconoclasm",
      "project": "Julie Dentzer",
      "assigned date": "24-Jan",
      "dd": "1/24/19",
      "et": "",
      "completed": false
   },
   "assignment25": {
      "action": "Conjecture development",
      "project": "Jenny",
      "assigned date": "24-Jan",
      "dd": "1/29/19",
      "et": "",
      "completed": false
   },
   "assignment43": {
      "action": "R3",
      "project": "Alex and Vita",
      "assigned date": "28-Jan",
      "dd": "2/4/19",
      "et": "",
      "completed": false
   },
   "assignment57": {
      "action": "Exam 1: Units 2-3",
      "project": "Dr. Campbell",
      "assigned date": "28-Jan",
      "dd": "2/3/19",
      "et": "",
      "completed": false
   },
   "assignment69": {
      "action": "Quiz 4",
      "project": "Dr. Campbell",
      "assigned date": "28-Jan",
      "dd": "2/3/19",
      "et": "",
      "completed": false
   },
   "assignment80": {
      "action": "Read Unit 4: Micronutrients",
      "project": "Dr. Campbell",
      "assigned date": "28-Jan",
      "dd": "2/3/19",
      "et": "",
      "completed": false
   },
   "assignment89": {
      "action": "Powertool Model",
      "project": "John",
      "assigned date": "28-Jan",
      "dd": "2/3/19",
      "et": "",
      "completed": false
   },
   "assignment26": {
      "action": "Conjecture development",
      "project": "Jenny",
      "assigned date": "29-Jan",
      "dd": "1/31/19",
      "et": "",
      "completed": false
   },
   "assignment27": {
      "action": "Reading: Hacklin, Incremental Innovation Becomes Disruptive",
      "project": "Sebastien",
      "assigned date": "29-Jan",
      "dd": "1/31/19",
      "et": "",
      "completed": false
   },
   "assignment90": {
      "action": "Assembly/Explode",
      "project": "John",
      "assigned date": "30-Jan",
      "dd": "2/17/19",
      "et": "",
      "completed": false
   },
   "assignment28": {
      "action": "Presentation Preparation",
      "project": "Jenny",
      "assigned date": "31-Jan",
      "dd": "2/5/19",
      "et": "",
      "completed": false
   },
   "assignment88": {
      "action": "Materials Project",
      "project": "Nate and Mark",
      "assigned date": "1-Feb",
      "dd": "2/1/19",
      "et": "",
      "completed": false
   },
   "assignment44": {
      "action": "R4",
      "project": "Alex and Vita",
      "assigned date": "4-Feb",
      "dd": "2/11/19",
      "et": "",
      "completed": false
   },
   "assignment45": {
      "action": "SP3",
      "project": "Alex and Vita",
      "assigned date": "4-Feb",
      "dd": "2/11/19",
      "et": "",
      "completed": false
   },
   "assignment63": {
      "action": "Diet Analysis Project: Food Photo Journal",
      "project": "Dr. Campbell",
      "assigned date": "4-Feb",
      "dd": "2/10/19",
      "et": "",
      "completed": false
   },
   "assignment70": {
      "action": "Quiz 5",
      "project": "Dr. Campbell",
      "assigned date": "4-Feb",
      "dd": "2/10/19",
      "et": "",
      "completed": false
   },
   "assignment81": {
      "action": "Read Unit 5: Labels, Fortification",
      "project": "Dr. Campbell",
      "assigned date": "4-Feb",
      "dd": "2/10/19",
      "et": "",
      "completed": false
   },
   "assignment99": {
      "action": "Progress 3",
      "project": "John",
      "assigned date": "4-Feb",
      "dd": "2/10/19",
      "et": "",
      "completed": false
   },
   "assignment18": {
      "action": "Carmen: Vermeer & Velazquez",
      "project": "Julie Dentzer",
      "assigned date": "5-Feb",
      "dd": "2/5/19",
      "et": "",
      "completed": false
   },
   "assignment30": {
      "action": "Video: Gill, Making cities more playful ",
      "project": "Sebastien",
      "assigned date": "7-Feb",
      "dd": "2/12/19",
      "et": "",
      "completed": false
   },
   "assignment46": {
      "action": "R5",
      "project": "Alex and Vita",
      "assigned date": "11-Feb",
      "dd": "2/18/19",
      "et": "",
      "completed": false
   },
   "assignment47": {
      "action": "SP4",
      "project": "Alex and Vita",
      "assigned date": "11-Feb",
      "dd": "2/18/19",
      "et": "",
      "completed": false
   },
   "assignment58": {
      "action": "Exam 2: Units 4-5",
      "project": "Dr. Campbell",
      "assigned date": "11-Feb",
      "dd": "2/17/19",
      "et": "",
      "completed": false
   },
   "assignment71": {
      "action": "Quiz 6",
      "project": "Dr. Campbell",
      "assigned date": "11-Feb",
      "dd": "2/17/19",
      "et": "",
      "completed": false
   },
   "assignment82": {
      "action": "Read Unit 6: Weight, Disorders",
      "project": "Dr. Campbell",
      "assigned date": "11-Feb",
      "dd": "2/17/19",
      "et": "",
      "completed": false
   },
   "assignment31": {
      "action": "Reading: Lynch, The Image of the City",
      "project": "Sebastien",
      "assigned date": "12-Feb",
      "dd": "2/14/19",
      "et": "",
      "completed": false
   },
   "assignment33": {
      "action": "Case Study Review",
      "project": "Lauren",
      "assigned date": "12-Feb",
      "dd": "2/26/19",
      "et": "",
      "completed": false
   },
   "assignment91": {
      "action": "Powertool Improvement Build Plan",
      "project": "John",
      "assigned date": "13-Feb",
      "dd": "2/24/19",
      "et": "",
      "completed": false
   },
   "assignment4": {
      "action": "Midterm",
      "project": "Julie Dentzer",
      "assigned date": "14-Feb",
      "dd": "2/21/19",
      "et": "",
      "completed": false
   },
   "assignment17": {
      "action": "Carmen: Gender & Society",
      "project": "Julie Dentzer",
      "assigned date": "14-Feb",
      "dd": "2/14/19",
      "et": "",
      "completed": false
   },
   "assignment32": {
      "action": "Reading: Donoff, The Playful City",
      "project": "Sebastien",
      "assigned date": "14-Feb",
      "dd": "2/19/19",
      "et": "",
      "completed": false
   },
   "assignment48": {
      "action": "Final Project Proposal",
      "project": "Alex and Vita",
      "assigned date": "18-Feb",
      "dd": "2/25/19",
      "et": "",
      "completed": false
   },
   "assignment64": {
      "action": "Diet Analysis Project: consumption Log and Analysis",
      "project": "Dr. Campbell",
      "assigned date": "18-Feb",
      "dd": "2/24/19",
      "et": "",
      "completed": false
   },
   "assignment65": {
      "action": "Diet Analysis Project: Interpretation",
      "project": "Dr. Campbell",
      "assigned date": "18-Feb",
      "dd": "2/24/19",
      "et": "",
      "completed": false
   },
   "assignment92": {
      "action": "Powertool Improvement CAD",
      "project": "John",
      "assigned date": "20-Feb",
      "dd": "3/7/19",
      "et": "",
      "completed": false
   },
   "assignment5": {
      "action": "Reading: Baudelaire, from The Painter of Modern Life",
      "project": "Julie Dentzer",
      "assigned date": "21-Feb",
      "dd": "2/26/19",
      "et": "",
      "completed": false
   },
   "assignment49": {
      "action": "VR Group Project, Part 1: Proposal",
      "project": "Alex and Vita",
      "assigned date": "25-Feb",
      "dd": "3/4/19",
      "et": "",
      "completed": false
   },
   "assignment72": {
      "action": "Quiz 7",
      "project": "Dr. Campbell",
      "assigned date": "25-Feb",
      "dd": "3/3/19",
      "et": "",
      "completed": false
   },
   "assignment83": {
      "action": "Read Unit 7: Micro, Food Safety",
      "project": "Dr. Campbell",
      "assigned date": "25-Feb",
      "dd": "3/3/19",
      "et": "",
      "completed": false
   },
   "assignment100": {
      "action": "Progress 4",
      "project": "John",
      "assigned date": "25-Feb",
      "dd": "3/3/19",
      "et": "",
      "completed": false
   },
   "assignment34": {
      "action": "Place characterization rewiew",
      "project": "Lauren",
      "assigned date": "26-Feb",
      "dd": "2/28/19",
      "et": "",
      "completed": false
   },
   "assignment36": {
      "action": "Reading: Heim Blind Spots",
      "project": "Sebastien",
      "assigned date": "28-Feb",
      "dd": "3/5/19",
      "et": "",
      "completed": false
   },
   "assignment50": {
      "action": "Assess Production Needs",
      "project": "Alex and Vita",
      "assigned date": "4-Mar",
      "dd": "3/18/19",
      "et": "",
      "completed": false
   },
   "assignment59": {
      "action": "Exam 3: Units 6-7",
      "project": "Dr. Campbell",
      "assigned date": "4-Mar",
      "dd": "3/10/19",
      "et": "",
      "completed": false
   },
   "assignment73": {
      "action": "Quiz 8",
      "project": "Dr. Campbell",
      "assigned date": "4-Mar",
      "dd": "3/10/19",
      "et": "",
      "completed": false
   },
   "assignment84": {
      "action": "Read Unit 8: Food Industry",
      "project": "Dr. Campbell",
      "assigned date": "4-Mar",
      "dd": "3/10/19",
      "et": "",
      "completed": false
   },
   "assignment35": {
      "action": "Preliminary Concepts (3 options for 3 sites)",
      "project": "Lauren",
      "assigned date": "5-Mar",
      "dd": "3/19/19",
      "et": "",
      "completed": false
   },
   "assignment93": {
      "action": "Powertool Improvement Revised CAD",
      "project": "John",
      "assigned date": "6-Mar",
      "dd": "3/24/19",
      "et": "",
      "completed": false
   },
   "assignment20": {
      "action": "Carmen: Monet Photography",
      "project": "Julie Dentzer",
      "assigned date": "12-Mar",
      "dd": "3/12/19",
      "et": "",
      "completed": false
   },
   "assignment51": {
      "action": "Motion Capture Prep",
      "project": "Alex and Vita",
      "assigned date": "18-Mar",
      "dd": "3/25/19",
      "et": "",
      "completed": false
   },
   "assignment66": {
      "action": "Super Market Survey",
      "project": "Dr. Campbell",
      "assigned date": "18-Mar",
      "dd": "3/24/19",
      "et": "",
      "completed": false
   },
   "assignment74": {
      "action": "Quiz 9",
      "project": "Dr. Campbell",
      "assigned date": "18-Mar",
      "dd": "3/24/19",
      "et": "",
      "completed": false
   },
   "assignment85": {
      "action": "Read Unit 9: Food Tech",
      "project": "Dr. Campbell",
      "assigned date": "18-Mar",
      "dd": "3/24/19",
      "et": "",
      "completed": false
   },
   "assignment6": {
      "action": "Reading: Greenberg, Modernist Painting",
      "project": "Julie Dentzer",
      "assigned date": "19-Mar",
      "dd": "3/21/19",
      "et": "",
      "completed": false
   },
   "assignment94": {
      "action": "Powertool Improvement 3D Print",
      "project": "John",
      "assigned date": "20-Mar",
      "dd": "3/31/19",
      "et": "",
      "completed": false
   },
   "assignment7": {
      "action": "Reading: Duchamp, The Richard Mutt Case",
      "project": "Julie Dentzer",
      "assigned date": "21-Mar",
      "dd": "3/26/19",
      "et": "",
      "completed": false
   },
   "assignment37": {
      "action": "Concept Review 1",
      "project": "Lauren",
      "assigned date": "21-Mar",
      "dd": "3/28/19",
      "et": "",
      "completed": false
   },
   "assignment75": {
      "action": "Quiz 10",
      "project": "Dr. Campbell",
      "assigned date": "25-Mar",
      "dd": "3/31/19",
      "et": "",
      "completed": false
   },
   "assignment86": {
      "action": "Read Unit 10: Biotech",
      "project": "Dr. Campbell",
      "assigned date": "25-Mar",
      "dd": "3/31/19",
      "et": "",
      "completed": false
   },
   "assignment16": {
      "action": "Carmen: Controversial Artworks",
      "project": "Julie Dentzer",
      "assigned date": "26-Mar",
      "dd": "3/26/19",
      "et": "",
      "completed": false
   },
   "assignment95": {
      "action": "Advanced Rendering/Animation/Photoshopping",
      "project": "John",
      "assigned date": "27-Mar",
      "dd": "4/7/19",
      "et": "",
      "completed": false
   },
   "assignment8": {
      "action": "Reading: Rosenberg, American Action Painters",
      "project": "Julie Dentzer",
      "assigned date": "28-Mar",
      "dd": "4/2/19",
      "et": "",
      "completed": false
   },
   "assignment9": {
      "action": "Recap: Greenberg Reading",
      "project": "Julie Dentzer",
      "assigned date": "28-Mar",
      "dd": "4/2/19",
      "et": "",
      "completed": false
   },
   "assignment52": {
      "action": "VR Production",
      "project": "Alex and Vita",
      "assigned date": "1-Apr",
      "dd": "4/26/19",
      "et": "",
      "completed": false
   },
   "assignment60": {
      "action": "Exam 4: Units 8, 9, 10",
      "project": "Dr. Campbell",
      "assigned date": "1-Apr",
      "dd": "4/7/19",
      "et": "",
      "completed": false
   },
   "assignment76": {
      "action": "Quiz 11",
      "project": "Dr. Campbell",
      "assigned date": "1-Apr",
      "dd": "4/7/19",
      "et": "",
      "completed": false
   },
   "assignment87": {
      "action": "Read Unit 11: Chocolate",
      "project": "Dr. Campbell",
      "assigned date": "1-Apr",
      "dd": "4/7/19",
      "et": "",
      "completed": false
   },
   "assignment55": {
      "action": "A4: Current Events",
      "project": "Dr. Campbell",
      "assigned date": "8-Apr",
      "dd": "4/14/19",
      "et": "",
      "completed": false
   },
   "assignment77": {
      "action": "Quiz 12",
      "project": "Dr. Campbell",
      "assigned date": "8-Apr",
      "dd": "4/14/19",
      "et": "",
      "completed": false
   },
   "assignment10": {
      "action": "Reading: Byran-Wilson, Remembering Yoko Ono's cut piece",
      "project": "Julie Dentzer",
      "assigned date": "9-Apr",
      "dd": "4/11/19",
      "et": "",
      "completed": false
   },
   "assignment38": {
      "action": "Model Building and Installation",
      "project": "Lauren",
      "assigned date": "9-Apr",
      "dd": "4/18/19",
      "et": "",
      "completed": false
   },
   "assignment96": {
      "action": "Final Due",
      "project": "John",
      "assigned date": "10-Apr",
      "dd": "4/14/19",
      "et": "",
      "completed": false
   },
   "assignment11": {
      "action": "Final",
      "project": "Julie Dentzer",
      "assigned date": "11-Apr",
      "dd": "4/18/18",
      "et": "",
      "completed": false
   },
   "assignment61": {
      "action": "Exam 5: Units 11, 12",
      "project": "Dr. Campbell",
      "assigned date": "15-Apr",
      "dd": "4/21/19",
      "et": "",
      "completed": false
   },
   "assignment12": {
      "action": "Carmen: Arts & Politics",
      "project": "Julie Dentzer",
      "assigned date": "16-Apr",
      "dd": "4/16/19",
      "et": "",
      "completed": false
   },
   "assignment56": {
      "action": "A5: Anonymous End of course Survey",
      "project": "Dr. Campbell",
      "assigned date": "22-Apr",
      "dd": "4/28/19",
      "et": "",
      "completed": false
   },
   "assignment62": {
      "action": "Exam 6: Cumulative",
      "project": "Dr. Campbell",
      "assigned date": "22-Apr",
      "dd": "4/28/19",
      "et": "",
      "completed": false
   },
   "assignment15": {
      "action": "Carmen: Art in the Age of YouTube",
      "project": "Julie Dentzer",
      "assigned date": "23-Apr",
      "dd": "4/23/19",
      "et": "",
      "completed": false
   },
   "assignment13": {
      "action": "Carmen: Art on Campus",
      "project": "Julie Dentzer",
      "assigned date": "30-Apr",
      "dd": "4/30/19",
      "et": "",
      "completed": false
   },
   "assignment14": {
      "action": "Carmen: The Magnificent Medici",
      "project": "Julie Dentzer",
      "assigned date": "30-Apr",
      "dd": "4/30/19",
      "et": "",
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
