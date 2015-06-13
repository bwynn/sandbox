(function(){
  // create a new constructor function
  function Bike() {};

  // arg1 = chainring teeth, arg2 = cassette teeth
  Bike.prototype.range = function(arg1, arg2) {
    return arg1/arg2;
  };

  Bike.prototype.wheelDiameter = function(arg1) {
    return arg1;
  };

  // create a new bike object
  var newBike = new Bike();

  // equation for gear inches
  newBike.gearInches = function(arg1, arg2) {
    return (arg1/arg2).toFixed(3);
  };

  newBike.answer = function() {
    var rings = parseInt(chainring.value);
    var cassette = parseInt(cogs.value);
    var answer = document.getElementById("answer");
    return answer.innerHTML = newBike.gearInches(rings, cassette) + " gear inches.";
    //console.log(rings);
    //console.log(cassette);
    //console.log(newBike.gearInches(parseInt(chainring.value), parseInt(cogs.value)));
  }

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
    // prevent default
    e.preventDefault();

    // checks to see if the user has input the values necessary to
    // check their gear range
    if (chnring.value !== "" &&
        cogs.value !== "") {
          newBike.answer();
              }
    // if no values entered, let the user know!
    else {
          var answer = document.getElementById("answer");
          return answer.innerHTML = "Please fill in missing fields";
        }
  },false);
})();
