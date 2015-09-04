(function() {

  var background = {
    class: ["yellow", "blue", "green", "pink", "red", "orange", "purple", "gold", "black"]
  };

  var tryit = function( newArray ) {
    return model.getClass( newArray );
  };

  var returnClass = function() {
    var newLength = background.class.length;
    var elem = document.getElementsByTagName("figure");

    for (var i = 0; i < newLength; i++) {
      elem[i].classList.add( tryit( background.class ));
    }
  };

  var init = function() {
    returnClass();
  };

  return init();

})();
