angular.module('Appster.controllers.Main', [])

.controller('MainController', ['$scope', '$http', function($scope, $http){
  $scope.appsOfTheWeek = [];
  $http.get('/data/playmarketdata.json').success(function(data){
  	$scope.appsOfTheWeek = data.results;
  });
}]);