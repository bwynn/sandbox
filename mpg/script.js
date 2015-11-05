// get gallons filled input

// get miles used input

// submit event


// LOCAL STORAGE HANDLING
var date = new Date();
var today = date.toDateString();

// iterate through the values to assign/ appropriate into tables
/*for (var i = 0; i < storedDates.length; i++) {
  console.log( storedDates[i] );
}*/

// create a user constructor to build
var User = function() {
  // user dates history
  this.dates = [];
  // user mpg history
  this.mpg = [];
  // dateHistory is the get function to retrieve localStorage values for dates prop 
  this.dateHistory = function() {
    // declare a variable to parse out the local storage properties
    var data = JSON.parse( localStorage.dates );
    // return data object
    return { data : data };
  };
  // mpgHistory is the get function to retrieve localStorage values for mpg prop
  this.mpgHistory = function() {
    // declare a variable to parse out the local storage properties
    var data = JSON.parse( localStorage.mpg );
    // return data object
    return { data : data };
  };
};

// create a new user instance
var user = new User();

// callback function that processes the input values as provided by user
// into local storage
// needs to be invoked for each instance of local storage assignment, eg. mpg and date
// Arguments:
// arr - array to populate, default state on page load of array is empty
// prop - string name to set local storage key
// val - value to be assigned to the local storage key (or prop, as it is designated above)
function setLocalStorage( arr, prop, val ) {
  // pushing value to outside of functional scope will allow for adding new entries into localStorage string
  arr.push( val );
  // push the values into the local storage values
  localStorage[prop] = JSON.stringify( arr );
}
