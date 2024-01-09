const currentDay = dayjs().format('MM DD YYYY');

$('#todaysDate').text(currentDay);

const saveBtn = document.getElementsByClassName('save-btn');

//function save () {
//    localStorage.getItem("9 AM").value;
//    console.log(`${localStorage.getItem("9 AM").value}`) 
//}

saveBtn.addEventListener("click", function () {
    localStorage.getItem("9 AM").value;
    console.log(`${localStorage.getItem("9 AM").value}`) 
});

//saveBtn.addEventListener('click', function() {
//    //Code to save data goes here
//    console.log('Data saved!');
//});

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