angular.module("mpgApp", [])
 .factory("Trip", function() {
   // create a Trip constructor object to instantiate with each visit to create a new record
   var Trip = function( cars, mpg, dates ) {
     this.cars = cars;
     this.mpg = mpg;
     this.dates = dates;
   };

   return Trip;
 })
 .filter("reverse", function() {
   return function(trips) {
     return trips.slice().reverse();
   }
 })
 .controller("mpgCtrl", function( $scope, Trip ) {
   // form controller
   $scope.miles = "";
   $scope.gallons = "";

   // The $scope.trips array holds all records, both db and session object (trip)
   $scope.trips = [];

   // New instantiation to create a new record for each user visit
   $scope.trip = new Trip();

   $scope.result = function() {
     var mpg = $scope.miles/ $scope.gallons;
     // set object value
     return parseFloat( mpg.toFixed(3));
   };

   $scope.timeStamp = function() {
     var date = new Date();
     var today = date.toDateString();
     return { date: today };
   };

   $scope.setDataToStorage = function() {
     // push the values into the local storage values as JSON data
     localStorage.history = JSON.stringify( $scope.trips );
   };

   $scope.updateData = function(newCar) {
     var mpg = $scope.result();

     $scope.trip.mpg = mpg;
     $scope.trip.cars = newCar;
     $scope.trip.dates = $scope.timeStamp().date;

     // push the trip object into the history array
     $scope.trips.push( $scope.trip );
     //console.log($scope.trips);
     // push the history array to localStorage
     $scope.setDataToStorage();
     //console.log( $scope.trips );
   };

   $scope.getFromStorage = function() {
       // declare a variable to parse out the local storage properties
       var data = JSON.parse( localStorage.history );
       // return data object
       //console.log( data );
       return {
         data : data
       }
   };

   // execute this function on load
   $scope.reportData = function() {
     if ( localStorage.history == null || localStorage == undefined ) {
       // return the function if there aren't any records in localstorage
       console.log( "No history to report");
       return;
     }
     else {
       for (var i = 0; i < $scope.getFromStorage().data.length; i++ ) {

         // loop through the data objects and push them into the trips array
         $scope.trips.push( $scope.getFromStorage().data[i] );

       }
       //console.log( $scope.trips );
     }
   }();
 });
