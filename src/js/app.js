angular.module('Appster', [
  'ngRoute',
  'ngTouch',
  'mobile-angular-ui',
  'Appster.controllers.Main'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'home.html', title: 'Apps de la Semana'});
}])
.run(['$rootScope', function($rootScope) {
	$rootScope.$on("$routeChangeSuccess", function(event, currentRoute, previousRoute){
		//Change page title, based on Route information
		$rootScope.viewTitle = currentRoute.title;
	});
}]);