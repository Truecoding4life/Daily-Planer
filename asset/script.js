
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



$('.btn').on('click', function(event) {
  console.log('Button just got clicked');
  console.log(event.target);

  // GET THE INPUT TIME ELEMENT
  var inputElement = $(this).siblings('input'); 
  var timeElement = $(this).siblings('.col-3');

  // Get the values from the elements
  var message = inputElement.val();
  var time = timeElement.text();

  // IF THE MESSAGE IS NULL RETURN AND CONSOLE.LOG
  if (!message) {
    console.log('Message is empty, not saving to local storage');
    return;
  }

  // Create a workOrder object
  var workOrder = {
    messages: message,
    time: time,
  };

  // I WANT A UNIQUE NAME FOR EACH KEY
  var uniqueKey = "workOrder_" + new Date().getTime();


  console.log('This Hour is booked by client: ' + time);
  console.log('This Message was sent by client: ' + message);

  // SAVE THAT TO LOCAL STORAGE
  localStorage.setItem(uniqueKey, JSON.stringify(workOrder));
});



// Rendering function to display saved data
function renderSavedData() {
  // Iterate through local storage items
  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);

    // Check if the key starts with "workOrder_"
    if (key.startsWith("workOrder_")) {
      var data = JSON.parse(localStorage.getItem(key));

      // Find the element with the matching time and update its value
      $(".col-3:contains(" + data.time + ")").siblings("input").val(data.messages);
    }
  }
}

$(document).ready(function() {
  renderSavedData();
});

$('.btn').on('click', function(event) {
  console.log('Button just got clicked');
  console.log(event.target);

  // Get the input and time elements
  var inputElement = $(this).siblings('input');
  var timeElement = $(this).siblings('.col-3');

  // Get the values from the elements
  var message = inputElement.val();
  var time = timeElement.text();


  if (!message) {
    console.log('Empty Message ');
    return;
  }

  // Create a workOrder object
  var workOrder = {
    messages: message,
    time: time,
  };

  // Generate a unique key for each item in local storage
  var uniqueKey = "workOrder_" + new Date().getTime();

  // Log the information
  console.log('This Hour is booked by client: ' + time);
  console.log('This Message was sent by client: ' + message);

  // Save to local storage
  localStorage.setItem(uniqueKey, JSON.stringify(workOrder));

  // Call the rendering function to display the saved data
  renderSavedData();
});









checkTime();
updateClock();