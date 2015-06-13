// create a new constructor function
function Bike() {};

// arg1 = chainring teeth, arg2 = cassette teeth
Bike.prototype.range = function(arg1, arg2) {
  return arg1/arg2;
};

Bike.prototype.wheelDiameter = function(arg1) {
  return arg1;
};

var newBike = new Bike();

var myrange = newBike.range(34,28); // creates a compact
var mydiameter = newBike.wheelDiameter(28) // fake wheel diameter, close to road Bike

// equation for gear inches
newBike.gearInches = function() {
  return mydiameter/myrange;
};

// get first input value
var chnring = document.getElementsByTagName("input")[0];
// get second input value
var cogs = document.getElementsByTagName("input")[1];
// get the submit button to trigger the calculation
var submit = document.getElementById('gearInch');
// get the select element
var whl = document.getElementById('wheelsize');

// create an event that looks at the input values from the user
submit.addEventListener("click", function(e) {
  // the the user value from the select options
  var wheel = whl.options[whl.selectedIndex].value;
  // checks to see if the user has input the values necessary to
  // check their gear range
  if (chnring.value !== "" &&
      cogs.value !== "") {
        console.log(parseInt(chainring.value));
        console.log(parseInt(cogs.value));
        console.log(wheel);
      }
  // if no values entered, let the user know!
  else {
        return console.log("enter a value");
      }
},false);
