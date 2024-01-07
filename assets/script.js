const currentDay = dayjs().format('MM DD YYYY');


$('#todaysDate').text(currentDay);
const saveBtn = document.getElementByClassName('save-btn');

saveBtn.addEventListener('click', function () {
    //Code to save data goes here
    console.log('Data saved!');
});

const currentTime = dayjs().format('HH');

const t = currentTime;

const rowColor = document.getElementsByClassName("row").style.backgroundColor;

const present = document.getElementsByClassName("row").style.backgroundColor;
const past = document.getElementsByClassName("row").style.backgroundColor;
const future = document.getElementsByClassName("row").style.backgroundColor;

function changeColor () {
    if (t < 12) {
        rowColor = present;
    } else if (t < 20) {
        rowColor = past;
    } else {
        rowColor = future;
    }   
}

//const changeColor = document.getElementById('textarea');

//textarea.addEventListener()