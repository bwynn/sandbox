
var loadSequence = [
  { e: $("span.before-btn"), p: { opacity: 1, translateX: -10, translateY: -10 }, o: { duration: 300, easing: "spring" } },
  { e: $("span.after-btn"), p: { opacity: 1, translateX: 10, translateY: 10 }, o: { duration: 300 } }
];

var unloadSequence = [
  { e: $("span.before-btn"), p: { opacity: 0, translateX: 10, translateY: 10 }, o: { duration: 300, easing: "spring" } },
  { e: $("span.after-btn"), p: { opacity: 0, translateX: -10, translateY: -10 }, o: { duration: 300 } }
];

setTimeout(function() {
  $.Velocity.RunSequence( loadSequence );
  setTimeout(function() {
    $.Velocity.RunSequence( unloadSequence );
  }, 4000);
}, 4000);
