let weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";


let today = new Date();
let hrs = today.getHours();
let min = today.getMinutes();
let hours = `${hrs}:${min > 10 ? '0' + min : min}`
let dayOfWeek = weekday[today.getDay()];
let date = dayOfWeek + " " + today.getDate() + "/" + (today.getMonth() + 1) + '/' + today.getFullYear();

let greet;

if (hrs < 12)
    greet = 'Good Morning!';
else if (hrs >= 12 && hrs <= 17)
    greet = 'Good Afternoon!';
else if (hrs >= 17 && hrs <= 24)
    greet = 'Good Evening!';

document.getElementById('widget').innerHTML =
    greet += `<div id="today">${date} - ${hours}</div>`;
