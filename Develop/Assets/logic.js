//Initialize variables
console.log("java")
var currentDay = 0;
var hoursArray = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM",];
    /* 
    current day and time
    past events 
    current event
    future event */

//Function definitions
function createSlots(){
    /* create time slots */
    var newSlot = $("<div>").addClass("row");
    var timeCol = $("<div>").addClass("col-1 hour").text(hoursArray[i]);
    var plannerCol = $("<textarea>").addClass("col-10 ");
    var saveCol = $("<button>").addClass("col-1 saveBtn").text("Save");


    /* add content into the time slots */
    newSlot.append(timeCol).append(plannerCol).append(saveCol);
    $(".container").append(newSlot);

}
    /*adding an event to local storage
    submit event
    display event
    */

//Function calls
for (var i =0; i < hoursArray.length; i++){
    createSlots(); 
    // if (hoursArray[i])   
}

//Event listeners
/* listen for form submission button
*/

//Add events