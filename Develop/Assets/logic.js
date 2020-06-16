//Initialize variables
//current day and time
var currentDay = new Date();
var currentHour = currentDay.getHours();
// hour object for the if statements
var hourConversion = [
  { regHour: "9AM", utc: "9" },
  { regHour: "10AM", utc: "10" },
  { regHour: "11AM", utc: "11" },
  { regHour: "12PM", utc: "12" },
  { regHour: "1PM", utc: "13" },
  { regHour: "2PM", utc: "14" },
  { regHour: "3PM", utc: "15" },
  { regHour: "4PM", utc: "16" },
  { regHour: "5PM", utc: "17" },
];
console.log("today is " + currentDay);
console.log("the current hour is " + currentHour);
/* 
    past events 
    current event
    future event */

//Function definitions
function createSlots() {
  /* create time slots */
  var newSlot = $("<div>").addClass("row");
  var timeCol = $("<div>")
    .addClass("col-1 hour")
    .text(hourConversion[i].regHour);
  var plannerCol = $("<textarea>").addClass("col-10 ");
  var saveCol = $("<button>").addClass("col-1 saveBtn").text("Save");
  newSlot.append(timeCol).append(plannerCol).append(saveCol);
  $(".container").append(newSlot);
  console.log(hourConversion[i].utc);
  console.log(currentHour);
  if (hourConversion[i].utc == currentHour) {
    plannerCol.addClass("present");
  } else if (hourConversion[i].utc < currentHour) {
    plannerCol.addClass("past");
  } else {
    plannerCol.addClass("future");
  }
}

/* add content into the time slots */

/*adding an event to local storage
    submit event
    display event
    */

//Function calls
for (var i = 0; i < 9; i++) {
  createSlots();
}

//Event listeners
/* listen for form submission button
 */

//Add events
