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
      var rings = parseInt(elemMap.chnring.value);
      var cassette = parseInt(elemMap.cogs.value);
      //console.log(rings);
      //console.log(cassette);
      //console.log(newBike.gearInches(inputMap.wheel, rings, cassette));
      elemMap.answer.innerHTML = newBike.gearInches(elemMap.wheel, rings, cassette) + " gear inches.";
    }
  };

  var elemMap = {
    chnring: document.getElementsByTagName("input")[0],
    cogs: document.getElementsByTagName("input")[1],
    wheel: newBike.wheelDiameter(),
    answer: document.getElementById("answer"),
    submit: document.getElementById('gearInch')
  }

  function getGears() {
    // checks to see if the user has input the values necessary to
    // check their gear range
    if (elemMap.chnring.value !== "" &&
        elemMap.cogs.value !== "") {
          return newBike.answer();
              }
    else {
          elemMap.answer.innerHTML = "Please fill in missing fields";
        }
  }

  function onSubmitChange() {
    // create an event that looks at the input values from the user
    elemMap.submit.addEventListener("click", function(e) {
      e.preventDefault();
      getGears();
    },false);
  }

  function init() {
    onSubmitChange();
  }

  return init();
}());
