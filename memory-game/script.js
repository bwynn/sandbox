// grid to be generated should be set at 4x4 upon page load
// sets index value
var newindex = function() {
  return 4;
};

// if a boolean value has been assigned (assuming that the user has
// successfully completed the first round), index should be set at 5x5
// this is in turn, exponential growth, and can therefor be set as a
// a basic index to start at, which is squared to determine the current
// grid value.
var grid = function() {
 return Math.pow(newindex(), 2);
};

// generate grid object on page load
var newgrid = {
  build: function() {
    for (var i = 1; i <= grid(); i++) {
      // create new div element
      var wrap = document.getElementById("boxWrap");
      var boxed = document.createElement("div");
      // append to the parent wrapping element
      wrap.appendChild(boxed);
      // add class attribute
      boxed.setAttribute("class", "box");
    }
  },
  // returns a random number between 1 and the number provided by the
  // grid function, in the default setting, returns between 1 and 16
  pattern: function() {
    // this object should gather it's random selection of grid elements
    // using the fisher-yates shuffle algorithm.
      var n = Math.floor((Math.random() * grid()) + 0);
      return n;
  }
};

newgrid.build();

// this self executing function determines the squares to assign the
// active class to as determined by the returned value of the
// newgrid.pattern() method.
(function(){
  var boxes = document.querySelectorAll("div.box");
  boxes[newgrid.pattern()].classList.add("active");
})();
