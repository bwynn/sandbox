

$("li.diamond").on("click", function() {
  $("#display-nav").addClass("selected");

  setTimeout(function() {
    $("#content").slideDown(500);
  },500)
})
