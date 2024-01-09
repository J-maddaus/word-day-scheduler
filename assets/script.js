
//  Displays todays date and time.

const todayDate = dayjs().format(" MMM DD, YYYY h:mm a");
$("#currentDay").html(todayDate);

// event listener on save button
$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    let time = $(this).parent().attr("id");
    let text = $(this).siblings(".description").val();

    //  this is grabbing the text and time variables and storing them in the local storage.
    localStorage.setItem(time, text);
    console.log(text, time)
  })


  function hourTracker() {

   const currentHour = dayjs().hour();

    //this is to check the hour block against the current time and to add classes dependent on if the hour block is in the past, present, or future.
    // the different classes change the background color base on past, present, or future.

    $(".time-block").each(function () {
      let hourBlock = parseInt($(this).attr("id").split("hour")[1]);
      if (hourBlock < currentHour) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");

      } else if (hourBlock === currentHour) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");

      }
      else {
        (hourBlock > currentHour)
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }

    })


  }
  // this is grabbing the stored items back out of local storage.
  $("#hour8 .description").val(localStorage.getItem("hour8"));
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));

  hourTracker();


});