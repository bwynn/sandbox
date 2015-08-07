
//mg.shell = (function() {
  // grid to be generated should be set at 4x4 upon page load
  // sets index value

  // ----------------------- MODULE SCOPE VARIABLES ----------------------------
  var configMap = {
    jquery_map: {
      box_wrap: $("#boxWrap"),
      new_box: $('<div class="box"/>')
    },
    settable_map: {
      cur_index: 4,
      hint_active: true,
      hint_inactive: false
    }
  };
  // ----------------------- END MODULE SCOPE VARIABLES ------------------------

  // ----------------------- UTILITY METHODS -----------------------------------

  // ----------------------- END UTILITY METHODS -------------------------------

  // ----------------------- DOM METHODS ---------------------------------------
  // Begin DOM method /buildGrid/
  // Purpose: This method returns the number of boxes to build within the
  // containing box.
  // Arguments: Pass in a number as the argument e.g. buildGrid(configMap.settable_map.cur_index);
  // Returns: Number
  var buildGrid = function( arg ) {
    return Math.pow( arg, 2);
  };
  // End DOM method /buildGrid/

  // Begin DOM method /buildBox/
  // generate grid object on page load
  var buildBox = function() {
        var
          i,
          boxWrap = configMap.jquery_map.box_wrap,
          newBox = configMap.jquery_map.new_box,
          gridLength = buildGrid(configMap.settable_map.cur_index);

          for (i = 0; i < gridLength; i++) {
            boxWrap.append( newBox.clone() );
          }
  };

  // returns a random number between 1 and the number provided by the
  // grid function, in the default setting, returns between 1 and 16
  var pattern = function() {
    // this object should gather it's random selection of grid elements
    // using the fisher-yates shuffle algorithm.
        return Math.floor((Math.random() * buildGrid( configMap.settable_map.cur_index )) + 0);
  };
  // ----------------------- END DOM METHODS -----------------------------------

  // ----------------------- EVENT HANDLERS ------------------------------------
  // ----------------------- END EVENT HANDLERS --------------------------------

  // ----------------------- PUBLIC METHODS ------------------------------------
  // ----------------------- END PUBLIC METHODS --------------------------------


    // this function determines the squares to assign the
    // active class to as determined by the returned value of the
    // newgrid.pattern() method.
    var patternLogic = function() {
      // get box
      var boxes = $("div.box"),
          // creates active object which is the randomly assigned box
          active = boxes[pattern()],
          sibling, newSib;

      // adds active value to the active box
      if (active == $("div.box")[15]) {
        sibling = active.previousSibling;
        newSib = sibling.previousSibling;
      } else {
        sibling = active.nextSibling;
        newSib = sibling.nextSibling;
      }

      active.addClass("active");
      sibling.addClass("active");
      newSib.addClass("active");
      // sets the timeout to hide the active box
      setTimeout(function() {
        active.classList.add("hide");
        sibling.classList.add("hide");
        newSib.classList.add("hide");
      },2000);
    };

  // add event handler that uses a conditional statement to determine
  // if the box clicked has the active class.
  var gameplay = function() {
    var boxes = $("div.box");
    boxes[i].addEventListener("click", function(e) {
      // declare an array to store the items clicked on
      var values = [];
    // conditional to validate selected boxes attributes
      if ($(this).attr('class').nodeValue == "box active hide") {
        // this shows the user the same color selection that they had
        // been originally shown
        $(this).remove(".hide");
        // add the clicked value to the values array
        values.push( $(this) );
        // invoke the winner function
        if (values.length === 3) {
          alert("you win!");
          location.reload();
        }
      } else {
        // visual indication that the user got the wrong answer
        $(this).addClass("wrong");
        // right now alert is present, but this should be
        // a pop up modal that prevents the user from further interaction
        alert("Try Again!");
        location.reload();
      }
    },false);
  };


  var initModule = function() {
    buildBox();
    //patternLogic();
    //gameplay();
  };
  initModule();
  //return { initModule : initModule };
//}());
