// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
 

//  Displays todays date and time and updates every second.

var todayDate = dayjs().format(" MMM DD, YYYY h:mm:ss a");
$("#currentDay").html(todayDate);

// event listener on this save button
$(document).ready(function () {
  $(".saveBtn").on("click", function() {
    var time= $(this).parent().attr("id");
    var text= $(this).siblings(".description").val();

//  this is grabbing the text and time variables and storing them in the local storage.
    localStorage.setItem(time, text);
    console.log( text, time)
  })
 



//this function is to check the hour block against the current time and to add classes dependent on if the hour block is in the past, present, or future.
function hourTracker() {

  var currentHour = dayjs().hour();

  $(".time-block").each(function() {
    var hourBlock = parseInt($(this).attr("id").split("hour")[1]);
 if (hourBlock < currentHour) {
  $(this).removeClass("future");
  $(this).removeClass("present");
  $(this).addClass("past");

 } else if (hourBlock === currentHour){
  $(this).removeClass("past");
  $(this).removeClass("future");
  $(this).addClass("present");

 } 
 else { (hourBlock > currentHour) 
  $(this).removeClass("past");
  $(this).removeClass("present");
  $(this).addClass("future");
 }

  })


}

// grabbing items from local storage.

$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour1 .description").val(localStorage.getItem("hour1"));
$("#hour2 .description").val(localStorage.getItem("hour2"));
$("#hour3 .description").val(localStorage.getItem("hour3"));
$("#hour4 .description").val(localStorage.getItem("hour4"));
$("#hour5 .description").val(localStorage.getItem("hour5"));

hourTracker();



});