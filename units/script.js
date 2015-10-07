// Create a new constructor object. Takes input value directly from
// text input element, and parses the value into a number, and returns a
// calculation based on the users settings
function FromInch( input ) {
  this.input = input;
  this.default = function() {
    return parseInt( this.input * 1 );
  };
  this.toFoot = function() {
    return parseInt( this.input / 12 );
  };
  this.toYard = function() {
    return parseInt( this.input / 36 );
  };
  this.toMile = function() {
    return parseInt( this.input / 63360 );
  };
  this.toMM = function() {
    return parseInt( this.input * 25.4 );
  };
  this.toCM = function() {
    return parseInt( this.input * 2.54 );
  };
  this.toMeter = function() {
    return parseInt( this.input * 0.254 );
  };
  this.toKilometer = function() {
    return parseInt( this.input * 0.00254 );
  }
}
