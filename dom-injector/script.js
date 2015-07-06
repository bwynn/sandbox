var hello = function() {
  // create object with element nodes for easy creation
  var p = document.createElement('p');
  // get content container
  var content = document.getElementById("content");
  // append paragraph element to content
  var added = content.appendChild(p);
  // get the textarea element
  var userInput = document.getElementById('userInput');
  // add conditional for text area validation
  if (userInput.value === '') {
    added.setAttribute("class", "alert");
    return added.innerHTML = "Please enter some text";
  } else {
    return added.innerHTML = userInput.value;
  }
};

var clearInput = function() {
  var userInput = document.getElementById('userInput');
  return userInput.value = '';
};

(function() {
  var sayHello = document.getElementById('sayHello');
  sayHello.addEventListener("click", function(e) {
    e.preventDefault();
    hello();
    clearInput();
  },false);
}());
