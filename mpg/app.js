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
      $scope.id = [];
      $scope.sessions = [];

      $scope.trip = {};

      $scope.buildId = function() {
        var id = Math.random().toString(36).substr(2);

        $scope.id.push(id);
        console.log("id: " + $scope.id);
      }

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

        // builds id
        $scope.buildId();


        // sets the localStorage key to the randomly assigned id as declared by
        // buildId(). This allows for multiple entries as a database to
        // create unique key - values
        // push the values into the local storage values as JSON data
        localStorage[$scope.id] = JSON.stringify( $scope.trip );

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
