    // Get the current date and time using Day.js
    var currentTime = dayjs().format("dddd DD");
    
    // Update the "timeHere" element with the current time
    // document.getElementById("timeHere").textContent ="Today is: " + currentTime;
 $('#timeHere').text( "Today is: "+ currentTime);
  // $('#timeDisplay').text(dayjs().format("hh:mm:ss"));
  var timeArray= [$('#9AM'),$('#10AM'),$('#11AM'),$('#12PM'),$('#1PM'),$('#2PM'),$('#3PM'),$('#4PM') ];
  
  var n = 9;

  function checkTime () {
    console.log("Check time");
    for (let i =0 ;i < timeArray.length;i++){
        // timeArray[i]= n;
        console.log('Element = ', timeArray[i]);
        if ( n < dayjs().format("H")){
            timeArray[i].addClass("past");
            n++;
    
     
          }

    }
  }
  checkTime();

  function updateClock() {
    $('#timeDisplay').text(dayjs().format("hh:mm:ss"));
}

// Update the clock every second
setInterval(updateClock, 1000);

// Call updateClock function immediately to set the time immediately
updateClock();
  $('.saveBTN').on('click', function () {
    var appt = $(this).siblings('.descr').val();
    var time = $(this).parent().attr('id');

    // save in localStorage
    localStorage.setItem(time,appt);  })