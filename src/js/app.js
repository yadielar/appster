angular.module('Appster', [
	'ui.router',
	'ngTouch',
	'mobile-angular-ui',
	'Appster.controllers.Main',
	'Appster.controllers.AppsWeek'
])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	//
	// For any unmatched url, redirect to /state1
	$urlRouterProvider.otherwise("/apps-de-la-semana");
	//
	// Now set up the states
	$stateProvider
		.state('appsweek', {
			abstract: true,
			url: '/apps-de-la-semana',
			template: '<ui-view/>',
			resolve: {
				query:  function($http){
					return $http({method: 'GET', url: '/data/playmarketdata.json'});
				}
			},
			data: {
				title: 'Apps de la Semana'
			}
		})
		.state('appsweek.list', {
			url: "/",
			templateUrl: "appsweek.list.html",
			controller: 'AppListController'
		})
		.state('appsweek.detail', {
			url: "/{appId:[0-9]{0,5}}",
			templateUrl: "appsweek.detail.html",
			controller: 'AppDetailController'
		});
}])
.run(['$rootScope', function($rootScope) {
	$rootScope.$on("$stateChangeSuccess", function(event, toState, toParams, fromState, fromParams){
		//Change page title, based on Route information
		$rootScope.viewTitle = toState.data.title;
	});
}]);