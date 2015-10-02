var userInput = document.getElementById("user-input");
var outputResult = document.getElementById("result");

var Session = function() {};

Session.prototype.valid = function( val ) {
  // turn into a number
  var results = parseInt(val);

  // if value is not a number return error msg
  if ( typeof results !== "number" ) {
    console.log("try again")
  } else if ( typeof results === "number" ){
    return results;
  }
}

var session = new Session();

userInput.addEventListener("keyup", function() {
  var select = document.getElementById("input-value");
  var output = document.getElementById("output-value");
  outputResult.innerHTML = calc( select, output );
});

function calc( unit1, unit2 ) {
  var newValue = userInput.value; // current input value
  // if english is selected
  if ( unit1.value === "English Standard" ) {
    // and english is output selection
    if ( unit2.value === "English Standard" ) {
      return session.valid( newValue ) * 1 + " inches"; // return calculation
    }
    // and metric is output selection
    if ( unit2.value === "Metric" ) {
      var fullNum = session.valid( newValue ) * 25.4; // return calculation
      return fullNum.toFixed(3) + "mm";
    }
  }

  // if metric is selected
  if ( unit1.value === "Metric" ) {
    // and metric is output selection
    if ( unit2.value === "English Standard" ) {
      var fullNum = session.valid( newValue ) * 0.0393701; // return calculation
      return fullNum.toFixed(3) + " inches";
    }
    // and english is output selection
    if ( unit2.value === "Metric" ) {
      return session.valid( newValue ) * 1 + "mm";// return calculation
    }
  }
}
