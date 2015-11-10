var button = document.querySelector(".main button");

/*var person = {
  this.name = localStorage.name;
  this.location = localStorage.location;
  this.age = localStorage.age;
};*/

var history = [];

var Person = function(name, location, age) {
  this.name = name;
  this.location = location;
  this.age = age;
};

var person = new Person();

var newUser = function( obj ) {
  var nameInput = document.getElementById("new-value");
  var name = nameInput.value;

  var locationInput = document.getElementById("new-location");
  var location = locationInput.value;

  var ageInput = document.getElementById("new-age");
  var age = ageInput.value;

  obj.name = name;
  obj.location = location;
  obj.age = age;
};

function setData() {
  history.push( person );
}

function setLocalStorage() {
  localStorage.history = JSON.stringify( history );
}

document.getElementById("submit").addEventListener("click", function(e) {
  e.preventDefault();
  newUser( person );
}, false);


/*button.addEventListener("click", function(e) {
  newUser();
});

var userName = localStorage.name;
var userLocation = localStorage.location;
var userAge = localStorage.age;*/
