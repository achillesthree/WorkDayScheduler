// the current day needs to display at the top of the calendar
// use momentjs to get and format the date and pput that as the textContent  fior an HTML element
var currentDay = moment().format('dddd, MMMM Do');

$("#currentDay").text(currentDay)

// each timeblock is color coded to  indicated whether its in the past, present, or future
// some sort of conditional statement to evaluate if the hour is greater than, less than, or equal to the current hour
// if (ID-OF-TIMEBLOCK == currentHour) {
   // add the present class to that timeblcoks
//} else if (ID-OF-TIMEBLOCK > currentHour) {
    // add the ffuture class to that timeblock
// }


// when i click the save button for that timeblock then the text is saved in localstorage
// I need an event listener on the save buttons that will save only that timeblcok's text to localstorage
$('.saveBtn').on('click', function() {
    // we need to get the value of the textarea next to this specific button and save in a vriable (value)
    console.log(this)
    // tyou can access siblings and parents of "this"
    // look up jquery accessing sibling value
    // also need to retrieve the parent div's id (9) (key)
    // localStroage.setItem(key,value)
})

// when i refresh the page, the saved events persist
// I need some sort of function to run when the page loads, it will pull all data from localStorage and put it in the corresponding textarea