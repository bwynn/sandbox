var model = (function() {
  // ------------------------ BEGIN MODEL ----------------------------------------
  // begin model function /getClass/
  // Purpose: this function is run for each array item in the background content
  // section. It pulls a random item out of the background.class array and then
  // removes that item from the array.
  getClass = function( argArray ) {
  	// get random string from array, will hold class value
   	var random = Math.floor(Math.random() * argArray.length),
  	 		cur_class = argArray.splice( random, 1 );

  	if ( argArray.length >= 0 ) {
  		return cur_class;
  	}
  	else {
  		console.log("There aren't any more background images to place.");
  	}

  };
  return {
    getClass: getClass
  };
}());
