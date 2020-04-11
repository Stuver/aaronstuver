function() {

  today = new Date();

  var dayAsText;

  switch (today.getDay()) {
      case 0:
          dayAsText = "Sunday";
          break;
      case 1:
          dayAsText = "Monday";
          break;
      case 2:
          dayAsText = "Tuesday";
          break;
      case 3:
          dayAsText = "Wednesday";
          break;
      case 4:
          dayAsText = "Thursday";
          break;
      case 5:
          dayAsText = "Friday";
          break;
      case 6:
          dayAsText = "Saturday";
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

  document.getElementById("headerDate").innerHTML = dayAsText + ", " + monthAsText + " " + today.getDate() + ", " + 2020;
}
