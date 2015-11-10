angular.module("mpgApp", [])
 .factory("Trips", function() {
   var Trips = function( cars, mpg, dates ) {
     this.cars = cars;
     this.mpg = mpg;
     this.dates = dates;
   };

   return Trips;
 })
 .controller("mpgCtrl", function( $scope, Trips ) {
   // form controller
   $scope.miles = "";
   $scope.gallons = "";

   /*$scope.trips = {
     cars: [],
     mpg: [],
     dates: []
   };*/

   $scope.history = [];

   $scope.trips = new Trips();

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
     localStorage.history = JSON.stringify( $scope.history );
   };

   $scope.updateData = function(newCar) {
     var mpg = $scope.result();

     $scope.trips.mpg = mpg;
     //$scope.trip.mpg = $scope.mpg;

     $scope.trips.cars = newCar;
     //$scope.trip.cars = $scope.cars;

     $scope.trips.dates = $scope.timeStamp().date;
     //$scope.trip.date = $scope.dates;

     $scope.history.push( $scope.trips );

     $scope.setDataToStorage();

     //console.log($scope.trips);
     console.log( $scope.history );
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

         $scope.history.push( $scope.getFromStorage().data[i] );

           /*$scope.trips.cars.push( $scope.getFromStorage().data.cars[i] );
           $scope.trips.mpg.push( $scope.getFromStorage().data.mpg[i] );
           $scope.trips.dates.push( $scope.getFromStorage().data.dates[i] );*/

       }
       console.log( $scope.history );
     }
   }();
 });
