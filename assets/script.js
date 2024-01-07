const currentDay = dayjs().format('MM DD YYYY');
$('#todaysDate').text(currentDay);

const saveBtn = document.getElementById('save-btn');

saveBtn.addEventListener('click', function () {
    //Code to save data goes here
    console.log('Data saved!');
});