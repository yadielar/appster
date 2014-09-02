angular.module('Appster.filters.AppsWeek', []).

filter('renderPrice', [function() {
	return function(value) {
		var price = (value > 0) ? value : "Free";
		return price;
	};
}]);
