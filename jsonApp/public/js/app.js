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
    $scope.world = "World";

    $http.get('/static/mock/info.json')
      .success(function(response) {
        $scope.competitors = response;
      }).
      error(function(response, status) {
        console.log(response);
        console.log(status);
      })
  });
