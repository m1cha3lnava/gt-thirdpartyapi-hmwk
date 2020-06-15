//Initialize variables
console.log("java")
var currentDay = 0;
var hoursVar = 9;
    /* 
    current day and time
    past events 
    current event
    future event */

//Function definitions
function createSlots(){
    /* create time slots */
    var newSlot = $("<div>").addClass("row");
    var timeCol = $("<div>").addClass("col-1 hour").text(hoursVar);
    var plannerCol = $("<textarea>").addClass("col-10 ");
    var saveCol = $("<button>").addClass("col-1 saveBtn");


    /* add content into the time slots */
    newSlot.append(timeCol).append(plannerCol).append(saveCol);
    $(".container").append(newSlot);

}
    /*adding an event to local storage
    submit event
    display event
    */

//Function calls
for (var i =0; i < 9; i++){
    if (hoursVar < 12){
        hoursVar + "AM";
    }
    else {
        hoursVar + "PM";
    }
    createSlots();
    hoursVar++
}

//Event listeners
/* listen for form submission button
*/

//Add events