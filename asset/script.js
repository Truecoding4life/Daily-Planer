
var currentTime = dayjs().format("dddd DD");


// I NEED TO PUT HOURS IN ORDER SO I WILL CHOSE AN ARRAY. I CAN USE IT INDEX TO DO SOME WORK.
$("#timeHere").text("Today is: " + currentTime);
var timeArray = [
  $("#9AM"),
  $("#10AM"),
  $("#11AM"),
  $("#12PM"),
  $("#1PM"),
  $("#2PM"),
  $("#3PM"),
  $("#4PM"),
];

// 9 IS HOUR STARTING HOUR HERE I SET THIS VARIABLE TO COMPARE IT WITH TIME
var n = 9;
function checkTime() {
  console.log("Check time");
  for (let i = 0; i < timeArray.length; i++) {
    // timeArray[i]= n;
    console.log("Element = ", timeArray[i]);
    if (n < dayjs().format("H")) {
      timeArray[i].addClass("past");
      n++;
    }
  }
}
// AFTER THIS MANY MINUTES UPDATE THE CLOCK
function updateClock() {
  $("#timeDisplay").text(dayjs().format("hh:mm:ss"));
}
setInterval(updateClock, 1000);


// THIS WILL SAVE THE INFORMATION TO JSON
$(".saveBTN").on("click", function () {
  var workOrder = $(this).siblings(".descr").val();
  var timeOder = $(this).parent().attr("id");
  var inputBox = $(this).siblings("input");
  inputBox.addClass("booked");

  // save in localStorage
  localStorage.setItem(timeOrder, workOrder);
});
