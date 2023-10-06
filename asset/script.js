
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
    if (n==dayjs().format("H")){
      time[i].addClass("present");
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
// $(".saveBTN").on("click", function () {
//   var workOrder = $(this).siblings(".descr").val();
//   var timeOder = $(this).parent().attr("id");
//   inputBox.addClass("booked");

//   // save in localStorage
//   localStorage.setItem(timeOrder, workOrder);
// });
$('.btn').on('click', function(event) {
  console.log('Button just got clicked');
  console.log(event.target);
  // Get the input and time elements
  var inputElement = $(this).siblings('input'); // Assuming the input is a sibling of the button
  var timeElement = $(this).siblings('.col-3'); // Assuming the time element has a class of 'col-3'

  // Get the values from the elements
  var message = inputElement.val();
  var time = timeElement.text();
  if (message!==true){ return; };
  // Create a workOrder object
  var workOrder = {
    messages: message,
    time: time,
  };

  // Generate a unique key for each item in local storage
  var uniqueKey = "workOrder"
  console.log('This Hour is booked by client: ' + time)
  console.log('This Message was sent by client: '+ message )
  // Save to local storage
  localStorage.setItem(uniqueKey, JSON.stringify(workOrder));
});

function renderSchedule (){
  var Schedule = JSON.parse(localStorage.getItem("workOrder"));

}








  // var InfoSaved = event.target.siblings('input').val();
// var hourSaved = event.target.parent().attr('.descr')
// localStorage.setItem('hour is' ,hourSaved);
// localStorage.setItem('Info Saved is', InfoSaved);
  // var workOrder = this.event.target().siblings('.descr');
  // var timeOder = $(this).parent().attr("id");
  console.log('Info Saved to local Storage')

checkTime();
updateClock();