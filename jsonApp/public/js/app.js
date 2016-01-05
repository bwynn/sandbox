angular.module("myApp", ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'templates/index',
        controller: 'myCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }).
  controller("myCtrl", function($scope, $http) {

    // get the user information
    $http.get('/static/mock/info.json')
      .success(function(response) {
        $scope.competitors = response;
      }).
      error(function(response, status) {
        console.log(response);
        console.log(status);
      });

    // get the event information
    $http.get('/static/mock/schedule.json').
      success(function(response) {
        $scope.events = response;
      }).
      error(function(response, status) {
        console.log(response);
        console.log(status);
      });

    // goal is to display each event under a competitor with their respective result in that
    // particular event. 
  });
