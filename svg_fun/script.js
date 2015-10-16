
var loadSequence = [
  { e: $("span.before-btn-left"), p: { opacity: 1, translateX: -10, translateY: -10 }, o: { duration: 300, easing: "spring" } },
  { e: $("span.after-btn-right"), p: { opacity: 1, translateX: 10, translateY: 10 }, o: { duration: 300, easing: "spring" } },
  { e: $("span.before-btn-right"), p: { opacity: 1, translateX: 10, translateY: -10 }, o: { duration: 300, easing: "spring" } },
  { e: $("span.after-btn-left"), p: { opacity: 1, translateX: -10, translateY: 10 }, o: { duration: 300, easing: "spring" } }
];

var unloadSequence = [
  { e: $("span.before-btn-left"), p: { opacity: 0, translateX: 10, translateY: 10 }, o: { duration: 300, easing: "spring" } },
  { e: $("span.after-btn-right"), p: { opacity: 0, translateX: -10, translateY: -10 }, o: { duration: 300, easing: "spring" } },
  { e: $("span.before-btn-right"), p: { opacity: 0, translateX: -10, translateY: 10 }, o: { duration: 300, easing: "spring" } },
  { e: $("span.after-btn-left"), p: { opacity: 0, translateX: 10, translateY: -10 }, o: { duration: 300, easing: "spring" } },
  { e: $("#btn-container"), p: { opacity: 0, zIndex: "-2" },  o: { duration: 300, easing: "ease-in-out" } },
  { e: $("section#content"), p: { opacity: 1 }, o: { duration: 400, easing: "spring" } }
];

function animDelay( sequence1, sequence2) {
  setTimeout(function() {
    $.Velocity.RunSequence( sequence1 );
    setTimeout(function() {
      $.Velocity.RunSequence( sequence2 );
    }, 1000);
  }, 500);
}

function btnEvent() {
  animDelay(loadSequence, unloadSequence);
}

var btn = document.getElementById("main-btn");

btn.addEventListener("click", btnEvent);
