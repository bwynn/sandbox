
//mg.shell = (function() {
  // grid to be generated should be set at 4x4 upon page load
  // sets index value

  // ----------------------- MODULE SCOPE VARIABLES ----------------------------
  var configMap = {
    jquery_map: {
      box_wrap: $("#boxWrap"),
      new_box: $('<div class="box"/>'),
      box: $("div.box"),
      check_scores: $("button#checkScores"),
      result_header: $("#results > h1")
    },
    settable_map: {
      cur_index: 4,
      hint_active: true,
      hint_inactive: false
    },
    grid_map: {
      correct_values: [],
      wrong_values: []
    },
    content: {
      winner: "You win!",
      try_again: "Sorry, try again."
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

  // Begin DOM method /createPattern/
  // this function determines the squares to assign the
  // active class to as determined by the returned value of the
  // newgrid.pattern() method.
  var createPattern = function() {
    // get box
    var boxes = $("div.box"),
        pat = pattern(),
        // creates active object which is the randomly assigned box
        sibling1, sibling2, newIndex;

    // changes index if the pattern variable exceeds 14
    if (pat >= 14) {
      pat = pat - 2;
    }
    // declare new active index
    newIndex = boxes[pat];
    sibling1 = newIndex.nextSibling;
    sibling2 = sibling1.nextSibling;

    newIndex.classList.add("active");
    sibling1.classList.add("active");
    sibling2.classList.add("active");
    // sets the timeout to hide the active box
    setTimeout(function() {
      newIndex.classList.add("hide");
      sibling1.classList.add("hide");
      sibling2.classList.add("hide");
    },2000);

    // return index object
    return newIndex;
  };
  // End DOM method /createPattern/

  // Begin DOM method /patternLogic/
  var setValues = function( obj ) {

    if ( obj.hasClass("active") === true ) {
      // remove the hide class from the obj.classList
      obj.removeClass("hide");
      // push value into grid_map.values array
      configMap.grid_map.correct_values.push(obj);
    }
    else {
      // push clicked item into wrong_values array
      configMap.grid_map.wrong_values.push(obj);
    }
  };
  // End DOM method /patternLogic/

  // Begin DOM method /evaluateScore/
  var evaluateScore = function() {
    if ( configMap.grid_map.wrong_values.length < 1 && configMap.grid_map.correct_values.length === 3) {
      configMap.jquery_map.result_header.text(configMap.content.winner);
    }
    else {
      configMap.jquery_map.result_header.text(configMap.content.try_again);
    }
  };
  // End DOM method /evaluateScore/
  //
  // ----------------------- END DOM METHODS -----------------------------------

  // ----------------------- EVENT HANDLERS ------------------------------------
  // add event handler that uses a conditional statement to determine
  // if the box clicked has the active class.
  var gameplay = function() {
    var boxes = $("div.box");
    boxes.on("click", function() {
      setValues( $(this) );
    });
  };

  // submit button event handler
  var scoreCheck = function() {
    configMap.jquery_map.check_scores.on("click", function() {
      evaluateScore();
    });
  };
  // ----------------------- END EVENT HANDLERS --------------------------------

  // ----------------------- PUBLIC METHODS ------------------------------------
  var initModule = function() {
    buildBox();
    createPattern();
    gameplay();
    scoreCheck();
  };
  // ----------------------- END PUBLIC METHODS --------------------------------


  initModule();
  //return { initModule : initModule };
//}());
