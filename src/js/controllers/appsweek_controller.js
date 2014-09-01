angular.module('Appster.controllers.AppsWeek', [])

.controller('AppListController', ['$scope', 'query', function($scope, query){
	$scope.appsOfTheWeek = query.data.results;
}])
.controller('AppDetailController', ['$scope', 'query', '$stateParams', function($scope, query, $stateParams){
	$scope.app = query.data.results[$stateParams.appId];
}]);