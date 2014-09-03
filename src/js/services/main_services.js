angular.module('Appster.services.Main', [])

.value('isNumber', function(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
})
.factory('Settings', function() {
	return {
		decimalPlaces: 2
	};
});