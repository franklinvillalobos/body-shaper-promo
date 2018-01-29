<!--Script Contador -->
function getSeconds() {
var now = new Date();
var time = now.getTime();  // time now in milliseconds
var midnight = new Date(now.getFullYear(),now.getMonth(),now.getDate(),0,0,0); // midnight 0000 hrs
// midnight - change time hh,mm,ss to whatever time required, e.g. 7,50,0 (0750)
var ft = midnight.getTime() + 86400000;  // add one day
var diff = ft - time;  
diff = parseInt(diff/1000);
if (diff > 86400) {diff = diff - 86400}
startTimer (diff);
}
var timeInSecs;
var ticker;
function startTimer(secs){
timeInSecs = parseInt(secs);
ticker = setInterval("tick()",1000); 
tick(); // to start counter display right away
}
function tick() {
var secs = timeInSecs;
if (secs>0) {
timeInSecs--;
}
else {
clearInterval(ticker); // stop counting at zero
//getSeconds();  // and start again if required
}
var hours= Math.floor(secs/3600);
secs %= 3600;
var mins = Math.floor(secs/60);
secs %= 60;
var horas = ((hours < 10 ) ? "0" : "" ) + hours + ""; 
var minutos =  ( (mins < 10) ? "0" : "" ) + mins + ""; 
var segundos =  ( (secs < 10) ? "0" : "" ) + secs + "";

document.getElementById("hours").innerHTML = horas;
document.getElementById("mins").innerHTML = minutos;
document.getElementById("secs").innerHTML = segundos;
}