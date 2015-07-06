var msg = function() {
  // create object with element nodes for easy creation
  var p = document.createElement('p');
  // get content container
  var content = document.getElementById("content");
  // append paragraph element to content
  var added = content.appendChild(p);
  // get the textarea element
  var userInput = document.getElementById('userInput');
  // return user input value
  return added.innerHTML = userInput.value;
};

// anon function takes a function as an argument
var validator = function(fn) {
  var elem = document.createElement("p"),
      container = document.getElementById("content"),
      content = container.appendChild(elem),
      alertMsg = document.querySelectorAll('p.alert'),
      msg = "Please add some text.";

  // conditional determines return value of function argument
  if(fn() === "") {
    // set class
    content.setAttribute("class", "alert");
    // return message
    content.innerHTML = msg;
  } else {
    return;
  }
}

// function to clear out the content of the text area after the user submits
// their content.
var clearInput = function() {
  var userInput = document.getElementById('userInput');
  return userInput.value = '';
};

// event trigger for the text input submission
(function() {
  var sayHello = document.getElementById('sayHello');
  var userInput = document.getElementById('userInput');
  sayHello.addEventListener("click", function(e) {
    e.preventDefault();
    validator(msg);
    clearInput();
    userInput.focus();
  },false);
}());

// give focus to the text area when page loads.
window.onload = function() {
  document.getElementById("userInput").focus();
};
