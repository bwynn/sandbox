// get gallons filled input

// get miles used input

// submit event


// LOCAL STORAGE HANDLING
var date = new Date();
var today = date.toDateString();

// locally declare an array to add values to
var dates = [];
// push the values into the array -- 2 arrays, 1 for mpg, 1 for date

// iterate through the values to assign/ appropriate into tables
/*for (var i = 0; i < storedDates.length; i++) {
  console.log( storedDates[i] );
}*/

// callback function that processes the input values as provided by user
// into local storage
function setLocalStorage( arr, prop, val ) {
  arr.push( val ); // pushing value to outside of functional scope will allow for adding new entries into localStorage string
  localStorage[prop] = JSON.stringify( arr ); // push the values into the local storage values
}

var User = function() {};
User.prototype.dates = function() {
  // declare a variable to parse out the local storage properties
  var data = JSON.parse( localStorage.dates );
  return { data : data };
}

var user = new User();
