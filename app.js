var alHours = '';
var alMinutes = '';

var alarmTime = '';

//Alarm Clock display settings
function digitalClock(){
var date = new Date();
var hours = date.getHours() + '';
var minutes = date.getMinutes() + '';
var seconds = date.getSeconds() + '';
var day = date.getDay();

if(hours.length < 2) {
    hours = '0' + hours;
}

if(minutes.length < 2) {
    minutes = '0' + minutes;
}

if(seconds.length < 2) {
    seconds = '0' + seconds;
}

var weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

var clock = weekDays[day] + ' ' + hours + ':' + minutes + ':' + seconds;

document.getElementById('clock').innerHTML = clock;

// Alarm Set Time -- > Chime Sounds 12 times
if (minutes == alMinutes && hours == alHours && date.getSeconds() < 12 ) {
    playBeep();
}         
}

// Set Alarm Time
function setAlrmTime() {
var timeString = String(document.getElementById("alarmTimeSelect").value);
alHours = timeString.charAt(0) + timeString.charAt(1);
alMinutes = timeString.charAt(3) + timeString.charAt(4);

document.getElementById("alarm").innerHTML = 'Alarm: ' + alHours + ':' + alMinutes ;    
}

//Snooze Button set to 5 minutes
function snooze() {
if (alMinutes != '' || alHours != ''){
  //set snooze time below
    var snoozMinutes = 01;
    if  (Number(alMinutes) < 50)  {
        snoozMinutes += Number(alMinutes);
        alMinutes = String(snoozMinutes);
        alHours = alHours;

    } else if (Number(alMinutes) >= 50) {
        snoozMinutes = (Number(alMinutes)+snoozMinutes) - 60;
        if (snoozMinutes === 0 ){
            alMinutes = '00';            
        }else {
            alMinutes = '0' + String(snoozMinutes);
        }
                
        alHours = Number(alHours) +1;
        String(alHours );
    }

    document.getElementById("alarm").innerHTML = 'Alarm: ' + alHours + ':' + alMinutes;
}    
}
const snoooze = ()=>{
  snooze();
   setInterval(snooze, 120000); 
  
  }
  function myStop() {
    document.getElementById("alarm").innerHTML =""
      clearInterval(snoooze);
    }

  
//Alarm Sound//
function playBeep() {
var audio = new Audio('audio');
//   Use  wav file for alarm
//    audio.src = "chime.wav";
audio.src = " http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/bonus.wav";

audio.play();
}  

digitalClock();
//Interval needed to make Clock run live
setInterval(digitalClock, 1000);


