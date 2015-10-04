var userInput = document.getElementById("user-input");
var outputResult = document.getElementById("result");

// Create a new constructor object. Takes input value directly from
// text input element, and parses the value into a number, and returns a
// calculation based on the users settings
function Unit( input ) {
  this.input = input;
  this.default = function() {
    return parseInt( this.input * 1 );
  };
  this.toInch = function() {
    return parseInt( this.input * 0.0393701 );
  };
  this.toMM = function() {
    return parseInt( this.input * 25.4 );
  };
  this.toCM = function() {
    return parseInt( this.input * 2.54 );
  };
  this.toMeter = function() {
    return parseInt( this.input * 0.254 );
  };
}

function calc( unit1, unit2 ) {
  var newValue = new Unit( userInput.value ), // current input value
      fullNum; // declare fullNum variable for later use.

  // if english is selected
  if ( unit1.value === "Inch" ) {
    // and english is output selection
    if ( unit2.value === "Inch" ) {
      return newValue.default();
    }
    // and metric is output selection
    if ( unit2.value === "Millimeters" ) {
			fullNum = newValue.toMM(); // return calculation
      return fullNum.toFixed(3);
    }
    else if ( unit2.value === "Centimeters" ) {
      fullNum = newValue.toCM();
      return fullNum.toFixed(3);
    }
    else if ( unit2.value === "Meters" ) {
      fullNum = newValue.toMeters();
      return fullNum.toFixed(3);
    }
  }

  // if metric is selected
  if ( unit1.value === "Millimeters" ) {
    // and metric is output selection
    if ( unit2.value === "Inch" ) {
      fullNum = newValue.toInch(); // return calculation
      return fullNum.toFixed(3);
    }
    // and english is output selection
    if ( unit2.value === "Millimeters" ) {
      return newValue.default();// return calculation
    }
  }
}


// input - output event handling
userInput.addEventListener("keyup", function() {
  var select = document.getElementById("input-value");
  var output = document.getElementById("output-value");
  outputResult.innerHTML = calc( select, output );
});
