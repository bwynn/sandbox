angular.module("mpgApp", [])
 .factory("Trip", function() {
   var Trip = function( cars, mpg, dates ) {
     this.cars = cars;
     this.mpg = mpg;
     this.dates = dates;
   };

   return Trip;
 })
 .controller("mpgCtrl", function( $scope, Trip ) {
   // form controller
   $scope.miles = "";
   $scope.gallons = "";

   /*$scope.trips = {
     cars: [],
     mpg: [],
     dates: []
   };*/

   $scope.trips = [];

   $scope.trip = new Trip();

   $scope.result = function() {
     var mpg = $scope.miles/ $scope.gallons;
     // set object value
     return parseFloat( mpg.toFixed(3));
   };

   $scope.timeStamp = function() {
     var date = new Date();
     //var today = date.toDateString();
     return { date: date };
   };

   $scope.setDataToStorage = function() {
     // push the values into the local storage values as JSON data
     localStorage.history = JSON.stringify( $scope.trips );
   };

   $scope.updateData = function(newCar) {
     var mpg = $scope.result();

     $scope.trip.mpg = mpg;
     //$scope.trip.mpg = $scope.mpg;

     $scope.trip.cars = newCar;
     //$scope.trip.cars = $scope.cars;

     $scope.trip.dates = $scope.timeStamp().date;
     //$scope.trip.date = $scope.dates;

     // push the trip object into the history array
     $scope.trips.push( $scope.trip );

     // push the history array to localStorage
     $scope.setDataToStorage();

     //console.log($scope.trips);
     console.log( $scope.trips );
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
     if ( localStorage.history == null || localStorage == undefined ) {
       console.log( "No history to report");
     }
     else {
       for (var i = 0; i < $scope.getFromStorage().data.length; i++ ) {

         $scope.trips.push( $scope.getFromStorage().data[i] );

           /*$scope.trips.cars.push( $scope.getFromStorage().data.cars[i] );
           $scope.trips.mpg.push( $scope.getFromStorage().data.mpg[i] );
           $scope.trips.dates.push( $scope.getFromStorage().data.dates[i] );*/

       }
       console.log( $scope.trips );
     }
   }();
 });
