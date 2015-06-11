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
// invoke newgrid.build()
newgrid.build();

// this immediate executing function determines the squares to assign the
// active class to as determined by the returned value of the
// newgrid.pattern() method.
(function(){
  var boxes = document.querySelectorAll("div.box");
  // creates active object which is the randomly assigned box
  var active = boxes[newgrid.pattern()],
      sibling, newSib;

  // adds active value to the active box
  if (active == document.querySelectorAll("div.box")[15]) {
    sibling = active.previousSibling;
    newSib = sibling.previousSibling;
  } else {
    sibling = active.nextSibling;
    newSib = sibling.nextSibling;
  }

  active.classList.add("active");
  sibling.classList.add("active");
  newSib.classList.add("active");
  // sets the timeout to hide the active box
  setTimeout(function() {
    active.classList.add("hide");
    sibling.classList.add("hide");
    newSib.classList.add("hide");
  },2000);
})();

// add event handler that uses a conditional statement to determine
// if the box clicked has the active class.
(function() {
  var boxes = document.querySelectorAll("div.box");
  // declare an array to store the items clicked on
  var values = [];
  // loop through all iterations of boxes
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", function(e) {
    // conditional to validate selected boxes attributes
      if (this.getAttributeNode('class').nodeValue == "box active hide") {
        // this shows the user the same color selection that they had
        // been originally shown
        this.classList.remove("hide");
        // add the clicked value to the values array
        values.push(this);
        // invoke the winner function
        if (values.length === 3) {
          alert("you win!");
          location.reload();
        }
      } else {
        // visual indication that the user got the wrong answer
        this.classList.add("wrong");
        // right now alert is present, but this should be
        // a pop up modal that prevents the user from further interaction
        alert("Try Again!");
        location.reload();
      }
    },false);
  }
})();
