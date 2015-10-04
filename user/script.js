var button = document.querySelector(".main button");

var person = function() {
  this.name = localStorage.name;
  this.location = localStorage.location;
  this.age = localStorage.age;
};

var newUser = function() {
  var nameInput = document.getElementById("new-value");
  var name = nameInput.value;

  var locationInput = document.getElementById("new-location");
  var location = locationInput.value;

  var ageInput = document.getElementById("new-age");
  var age = ageInput.value;

  localStorage.name = name;
  localStorage.location = location;
  localStorage.age = age;
};


button.addEventListener("click", function(e) {
  newUser();
});

var userName = localStorage.name;
var userLocation = localStorage.location;
var userAge = localStorage.age;
