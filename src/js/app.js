angular.module('Appster', [
	'ui.router',
	'ngTouch',
	'mobile-angular-ui',
	'Appster.directives.Main',
	'Appster.directives.AppsWeek',
	'Appster.services.Main',
	'Appster.filters.AppsWeek',
	'Appster.controllers.Main',
	'Appster.controllers.AppsWeek'
])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	//
	// For any unmatched url, redirect to /state1
	$urlRouterProvider.otherwise("/apps-de-la-semana/");
	//
	// Now set up the states
	$stateProvider
		.state('appsweek', {
			abstract: true,
			url: '/apps-de-la-semana',
			template: '<div ui-view class="appsweek" />',
			resolve: {
				query:  function($http){
					return $http({method: 'GET', url: '/data/playmarketdata.json'});
				}
			}
		})
		.state('appsweek.list', {
			url: "/",
			templateUrl: "appsweek.list.html",
			controller: 'AppListController',
			data: {
				title: 'Apps de la Semana',
				child: false
			}
		})
		.state('appsweek.detail', {
			url: "/{appId:[0-9]*}",
			templateUrl: "appsweek.detail.html",
			controller: 'AppDetailController',
			data: {
				title: 'Detalles',
				child: true,
				funnkeControls: true
			}
		});
}])
.run(['$rootScope', function($rootScope) {
	$rootScope.$on("$stateChangeSuccess", function(event, toState, toParams, fromState, fromParams){

		$rootScope.viewTitle = toState.data.title;
		$rootScope.isChildState = (toState.data.child) ? true : false;
		$rootScope.hasFunnke = (toState.data.funnkeControls) ? true : false;

	});
}]);