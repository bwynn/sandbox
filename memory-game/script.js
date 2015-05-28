// grid to be generated should be set at 4x4 upon page load
// sets index value
var index = 4;

// if a boolean value has been assigned (assuming that the user has
// successfully completed the first round), index should be set at 5x5
// this is in turn, exponential growth, and can therefor be set as a
// a basic index to start at, which is squared to determine the current
// grid value.
var grid = Math.pow(index, 2);


// generate grid object on page load
var newgrid = {
  build: function() {
    for (var i = 1; i <= grid; i++) {
      // create new div element
      var wrap = document.getElementById("boxWrap");
      var boxed = document.createElement("div");
      // append to the parent wrapping element
      wrap.appendChild(boxed);
      // add class attribute
      boxed.setAttribute("class", "box");
    }
  }
};

newgrid.build();

// this clearly needs to be cleaned up, and the object above needs to
// be instantiated on page load, as opposed to calling it as an
// anonymous function.
var boxes = document.querySelectorAll("div.box");

boxes[3].classList.add("active");
