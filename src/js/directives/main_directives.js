angular.module('Appster.directives.Main', [])

/* Directive based on scrollableContent for enabling overthrow anywhere with custom styling */
.directive("scrollableCustom", [
	function() {
		return {
			replace: false,
			restrict: "C",
			link: function(scope, element, attr) {
				if (overthrow.support !== "native") {
					element.addClass("overthrow");
					overthrow.forget();
					return overthrow.set();
				}
			}
		};
	}
]);