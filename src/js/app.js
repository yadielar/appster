angular.module('Appster', [
  'ngRoute',
  'ngTouch',
  'mobile-angular-ui',
  'Appster.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'home.html'});
});