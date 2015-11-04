// get gallons filled input

// get miles used input

// submit event


// LOCAL STORAGE HANDLING
var date = new Date();
var today = date.toDateString();
//console.log(today);

var anotherDate = new Date(2015, 10, 3);
var yesterday = anotherDate.toDateString();


//console.log( yesterday );

// locally declare an array to add values to
var dates = [];
// push the values into the array -- 2 arrays, 1 for mpg, 1 for date
dates.push(today);
dates.push(yesterday);

// push the values into the local storage values
localStorage["dates"] = JSON.stringify(dates);

// declare a variable to parse out the local storage properties
var storedDates = JSON.parse(localStorage.dates);

console.log( storedDates );

// iterate through the values to assign/ appropriate into tables
for (var i = 0; i < storedDates.length; i++) {
  console.log( storedDates[i] );
}
