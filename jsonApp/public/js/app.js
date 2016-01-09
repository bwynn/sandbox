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
        $scope.competitors = response.competitors;
        $scope.events = response.events;
      }).
      error(function(response, status) {
        console.log(response);
        console.log(status);
      });
    // goal is to display each event under a competitor with their respective result in that
    // particular event
  });
