window.onload = function(){
let date = new Date(),
    year = date.getFullYear(),
    month = date.getMonth() +1,
    day = date.getDay(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds(),
    miliSeconds = date.getMilliseconds();

let mm = month;
if (mm < 10) {mm = '0' + mm}

let dd = day;
if (dd < 10) {dd = '0' + dd}

let ss = seconds;
if (ss <10) {ss = '0' + ss}

let min = minutes;
if (min < 10) {min = '0' + min}

let hh = hours;
if (hh < 10) {hh = '0' + hh}

let time = 'Date: ' + day + ':' + month + ':' + year + '  /   Time: ' + 
hours +':' + minutes +':' + seconds + ':' + miliSeconds;

document.getElementsByTagName('div')[0].innerHTML = time;
window.setTimeout(arguments.callee, 1);
};