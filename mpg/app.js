    angular.module("mpgApp", [])
    .filter("mpgValue", function() {
      return function getVal( elem ) {
        var val = elem.value;

        if ( typeof val === "string" ) {
          var toNum = parseInt( val );
          // check value of toNum to make sure it's a valid value
          if ( isNaN( toNum ) ) {
            // log an error for the time being
            console.log("something went wrong");
          }
          else {
            // return number
            return toNum;
          }
        }
      }
    })
    .controller("mpgCtrl", function( $scope ) {
      // form controller
      $scope.miles = "";
      $scope.gallons = "";
      $scope.cars = [];
      $scope.mpg = [];
      $scope.dates = [];
      $scope.currentCar = localStorage.car;

      $scope.trip = {};

      $scope.result = function( newCar ) {
        var mpg = $scope.miles/ $scope.gallons;
        // set object value
        mpg = parseFloat( mpg.toFixed(3));
        $scope.mpg.push( mpg );
        $scope.trip.mpg = $scope.mpg;

        $scope.cars.push( newCar );
        $scope.trip.cars = $scope.cars;

        $scope.dates.push( $scope.timeStamp().date );
        $scope.trip.date = $scope.dates;

        // pushing value to outside of functional scope will allow for adding new entries into localStorage string
        //arr.push( val );
        // push the values into the local storage values as JSON data
        localStorage.report = JSON.stringify( $scope.trip );

      };

      $scope.timeStamp = function() {
        var date = new Date();
        var today = date.toDateString();
        return { date: today };
      }

      $scope.getCar = function() {
          // declare a variable to parse out the local storage properties
          var data = JSON.parse( localStorage.car );
          // return data object
          console.log( data );
          return { data : data };
      };

    });
