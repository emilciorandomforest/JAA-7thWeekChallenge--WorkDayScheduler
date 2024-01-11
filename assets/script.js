const currentDay = dayjs().format('MM DD YYYY');

$('#todaysDate').text(currentDay);

const saveBtn = document.getElementsByClassName('saveBtn');

for (let i = 0; i < saveBtn.length; i++) {
    saveBtn[0].addEventListener("click", myFunction) 

function myFunction() {
    alert ("Hello World!");
};
}

//function save () {
//    localStorage.getItem("9 AM").value;
//    console.log(`${localStorage.getItem("9 AM").value}`) 
//}

// Create a new "Date" object
var now = new Date();
let time = now.getHours();
console.log(now.getHours())

localStorage.setItem("9 AM", "None");
localStorage.getItem("9 AM");
console.log(`${localStorage.getItem("9 AM")}`);

const currentTime = dayjs().format('HH');
const t = currentTime;

const rowColor = document.getElementsByClassName("row");

const present = document.getElementsByClassName("present");
const past = document.getElementsByClassName("past");
const future = document.getElementsByClassName("future");

function changeColor () {
    if (t < 12) {
        rowColor.style.backgroundColor = present;
    } else if (t < 20) {
        rowColor.style.backgroundColor = past;
    } else {
        rowColor.style.backgroundColor = future;
    }   
}

//const changeColor = document.getElementById('textarea');

//textarea.addEventListener()