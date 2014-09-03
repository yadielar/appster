angular.module('Appster.directives.AppsWeek', [])

.directive('rateit', [function(version) {
	return {
        // Restrict it to be an attribute in this case
        restrict: 'A',
        // responsible for registering DOM listeners as well as updating the DOM
        link: function(scope, element, attrs) {
            j(element).rateit({
            	value: attrs.rateit,
            	max: 5,
            	step: 0.5,
            	readonly: true,
            	ispreset: true,
            	starwidth: 15,
            	starheight: 15
            });
        }
    };
}]);