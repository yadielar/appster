angular.module('Appster.controllers.Main', [])

.controller('MainController', ['$scope', '$window', function($scope, $window){
	$scope.goBack = function() {
		$window.history.back();
	};
}]);