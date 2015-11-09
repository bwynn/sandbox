angular.module("mpgApp", [])
 .filter("lastItem", function() {
   return function( arr ) {
     return arr.slice(-1)[0];
   }
 })
 .controller("mpgCtrl", function( $scope ) {
   // form controller
   $scope.miles = "";
   $scope.gallons = "";

   $scope.trips = {
     cars: [],
     mpg: [],
     dates: []
   };

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

     $scope.trips.mpg.push( mpg );
     //$scope.trip.mpg = $scope.mpg;

     $scope.trips.cars.push( newCar );
     //$scope.trip.cars = $scope.cars;

     $scope.trips.dates.push( $scope.timeStamp().date );
     //$scope.trip.date = $scope.dates;

     // Update the new values into local storage
     $scope.setDataToStorage();

     console.log($scope.trips);
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

   $scope.reportData = function() {
       for (var i = 0; i < $scope.getFromStorage().data.cars.length; i++ ) {

           $scope.trips.cars.push( $scope.getFromStorage().data.cars[i] );
           $scope.trips.mpg.push( $scope.getFromStorage().data.mpg[i] );
           $scope.trips.dates.push( $scope.getFromStorage().data.dates[i] );

       }
       console.log("cars: " + $scope.trips.cars + ", mpg: " + $scope.trips.mpg + ", dates: " + $scope.trips.dates );
   };
 });
