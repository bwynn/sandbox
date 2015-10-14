
// REQUIRES VELOCITY UI Library module

// Begin Demo bike slide in declarations
var slideInSequence = [
  { e: $(".velocity .demo .overlay"), p: { opacity: 0.4 }, o: { duration: 100, easing: "spring" } },
  { e: $(".velocity .btm-left-promo"), p: { left: "-35%", rotateZ: 40 }, o: { duration: 300, easing: "spring" } }
];

var slideOutSequence = [
  { e: $(".velocity .btm-left-promo"), p: { left: "-80%", rotateZ: 90 }, o: { duration: 100, easing: "spring" } },
  { e: $(".velocity .overlay"), p: { opacity: 0 }, o: { duration: 300, easing: "spring" } }
];

function demoEvent() {
  var $element = $(".velocity .demo")
  mouseEnterEvent( $element , slideInSequence );
  mouseOutEvent( $element, slideOutSequence );
}
// End Demo bike slide in

// Begin Session88 bike declarations
var bounceInSequence = [
  { e: $(".velocity .session88 .overlay"), p: { opacity: 0.4 }, o: { duration: 100, easing: "spring" } },
  { e: $(".velocity .center-promo"), p: { top: "30%", left: "0%" }, o: { duration: 300, easing: "spring" } }
];

var bounceOutSequence = [
  { e: $(".velocity .center-promo"), p: { top: "-50%" }, o: { duration: 300, easing: "spring" } },
  { e: $(".velocity .session88 .overlay"), p: { opacity: 0 }, o: { duration: 100, easing: "spring" } },
  { e: $(".velocity .center-promo"), p: { left: "-50%" }, o: { duration: 0} }
];

function sessionEvent() {
  var $element = $(".velocity .session88");
  mouseEnterEvent( $element, bounceInSequence );
  mouseOutEvent( $element, bounceOutSequence );
}
// End Session88 bike declarations


/* ========================== EVENT HANDLERS =============================== */
function mouseEnterEvent( $element, sequence ) {
  $element.on("mouseenter", function() {
    $.Velocity.RunSequence( sequence );
  });
}

function mouseOutEvent( $element, sequence ) {
  $element.on("mouseout", function() {
    $.Velocity.RunSequence( sequence );
  });
}

/* ========================== INIT ========================================== */

function init() {
  demoEvent();
  sessionEvent();
}

init();
