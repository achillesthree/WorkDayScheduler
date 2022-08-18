// the current day needs to display at the top of the calendar DONE
// used momentjs to get and format the date and put that as the textContent 
//for an HTML element DONE


document.body.style.backgroundColor = "yellow";

var currentDay = moment().format('dddd, MMMM Do');

$("#currentDay").text(currentDay)
var currentHour = cal.getHours();

amButton9.addEventListener("click", function() {
var am9local = amButton9class.value;
localStorage.setItem("9am Text",am9local)});

    function displayTexts () {
        
        document.getElementById("9a").textContent = localStorage.getItem("9am Text");
    }

    displayTexts()


// each timeblock is color coded to  indicate whether it's in the past, present, or future
// some sort of conditional statement to evaluate if the hour is greater than, less than, 
// // or equal to the current hour

// if (ID-OF-TIMEBLOCK (9-17) == currentHour) {
   // add the present class to that timeblcoks
//} else if (ID-OF-TIMEBLOCK (9-17) > currentHour) {
    // add the future class to that timeblock
// }


// when i click the save button for that timeblock then the text is saved in localstorage
// I need an event listener on the save buttons that will save only that timeblock
//to localstorage

//$('.saveBtn').on('click', function() {
    // we need to get the value of the textarea next to this specific button and 
    //save in a variable (value)
    //console.log(this)
    // you can access siblings and parents of "this"
    // look up jquery accessing sibling value
    // also need to retrieve the parent div's id (9) (key)
    // localStroage.setItem(key,value)
//})

// when i refresh the page, the saved events persist

//e.preventDefault();

// handleClick(event) {
//     event.persist();
//     this.setState((prevState)) => ({
//         foo: prevState.foo + event.pageX
//     }));


// I need some sort of function to run when the page loads, 
// it will pull all data from localStorage and put it in the corresponding textarea

