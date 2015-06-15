(function(){

  // Originally used a constructor function to build up this page, however, this page and code is much more suitable for an object literal, which is what's being implemented here now. 
  var newBike = {
    wheelDiameter: function() {
      // get the select element
      var whl = document.getElementById('wheelsize');
      // the the user value from the select options
      var wheel = whl.options[whl.selectedIndex].text;
      // prevent default

      // run conditional to gather user selected option and return the inch
      // converted value.
      if (wheel == "26") {
        return 26;
      } else if (wheel == "27 1/4") {
        return 27.25;
      } else if (wheel == "650b") {
        return 27.5;
      } else if (wheel == "700c") {
        return 29;
      } else if (wheel == "29er") {
        return 29;
      }
    },
    gearInches: function(arg1, arg2, arg3) {
      return (arg1 * (arg2/arg3)).toFixed(3);
    },
    answer: function() {
      var rings = parseInt(chainring.value);
      var cassette = parseInt(cogs.value);
      var wheel = newBike.wheelDiameter();
      var answer = document.getElementById("answer");
      //console.log(rings);
      //console.log(cassette);
      //console.log(newBike.gearInches(wheel, rings, cassette));
      return answer.innerHTML = newBike.gearInches(wheel, rings, cassette) + " gear inches.";
    }
  };
  // create a new constructor function
  /*function Bike() {};

  // create the prototype constructor object for the wheel diameter function
  Bike.prototype.wheelDiameter = function() {
    // get the select element
    var whl = document.getElementById('wheelsize');
    // the the user value from the select options
    var wheel = whl.options[whl.selectedIndex].text;
    // prevent default

    // run conditional to gather user selected option and return the inch
    // converted value.
    if (wheel == "26") {
      return 26;
    } else if (wheel == "27 1/4") {
      return 27.25;
    } else if (wheel == "650b") {
      return 27.5;
    } else if (wheel == "700c") {
      return 29;
    } else if (wheel == "29er") {
      return 29;
    }
  };*/

  // create a new bike object
  //var newBike = new Bike();

  // equation for gear inches
  /*newBike.gearInches = function(arg1, arg2, arg3) {
    return (arg1 * (arg2/arg3)).toFixed(3);
  };

  newBike.answer = function() {
    var rings = parseInt(chainring.value);
    var cassette = parseInt(cogs.value);
    var wheel = newBike.wheelDiameter();
    var answer = document.getElementById("answer");
    //console.log(rings);
    //console.log(cassette);
    //console.log(newBike.gearInches(wheel, rings, cassette));
    return answer.innerHTML = newBike.gearInches(wheel, rings, cassette) + " gear inches.";
  }*/

  // get first input value
  var chnring = document.getElementsByTagName("input")[0];
  // get second input value
  var cogs = document.getElementsByTagName("input")[1];
  // get the submit button to trigger the calculation
  var submit = document.getElementById('gearInch');

  // create an event that looks at the input values from the user
  submit.addEventListener("click", function(e) {
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
