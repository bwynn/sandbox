// create an immediately instantiated function, thus protecting the content
(function() {
  // create an object literal with an array to help us determine the array length,
  // in practical application, this will be how we determine the number of
  // navigation list items to create, which can then get the pertinent information
  // to populate
  var collection = {
    albums: ['one', 'two', 'three', 'four', 'five', 'six'],
    urls: ["#1", "#2", "#3", "#4", "#5", "#6"]
  };

  // create an anon function to get length of albums
  var albumLength = function() {
    return collection.albums.length;
  };

  // anon function to create container boxes
  var buildNavBoxes = function() {
    // create for loop using albumLength method for sizing
    for (var i = 0; i < albumLength(); i++) {
      // get placement container
      var placement = document.getElementById("globalNavContent"),
      // create div container element
          cont = document.createElement("li");
      // assign class attribute to newly created element
      cont.setAttribute("class", "navigation-boxes");
      // propagate creation of boxes
      placement.appendChild(cont);
    }
  }();

  // function to build the anchor tags based on the number of elements found
  // within the collection urls array
  var buildNavLinks = function() {
    // get number of container objects from above anon function
    var containers = document.getElementsByClassName("navigation-boxes");
    // loop through the container elements
    for (var i = 0; i < containers.length; i++) {
      // create semantic element for content placement
      var elem = document.createElement("a");
      // apply class attributes as necessary
      elem.setAttribute("class", "nav-content");
      // append elements into containers
      containers[i].appendChild(elem);
      // append content from collection object to set content
      elem.setAttribute("href", collection.urls[i]);
    }
  }();

  // function to build the contents of the anchor tags, based on the
  // collection object's information from the albums array
  var buildNavContent = function() {
    // get anchor elements from nav
    var anchors = document.querySelectorAll("a.nav-content");
    // loop through so as to assign content
    for (var i = 0; i < anchors.length; i++) {
      anchors[i].innerHTML = collection.albums[i];
    }
  }();
}());

// function to perform an repeatable task generating dom content and appending
// based on the argument, which would be defined within the function it is
// being called from. 
var builder = function(arg) {
  // get container to append content
  var container = document.getElementById("globalNav");
  // define element to create
  var elem = document.createElement("li");
  // define content via argument to pass in for text response
  elem.innerHTML = arg;
  // return new content to appended container
  return container.appendChild(elem);
}

var testSubject = function() {
  // define variable to be passed as the argument of the builder function
  var def = "Some string being passed";
  // invoke builder function using def as argument
  builder(def);
};
