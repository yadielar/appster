angular.module('Appster.filters.AppsWeek', [])

.filter('renderPrice', [function() {
	return function(value) {
		var price = (value > 0) ? value : "Free";
		return price;
	};
}])

.filter('truncate', [function () {
	return function (value, wordwise, max, tail) {
		if (!value) return '';

		max = parseInt(max, 10);
		if (!max) return value;
		if (value.length <= max) return value;

		value = value.substr(0, max);
		if (wordwise) {
			var lastspace = value.lastIndexOf(' ');
			if (lastspace != -1) {
				value = value.substr(0, lastspace);
			}
		}

		return value + (tail || '…');
	};
}])

.filter('toFixed', ['isNumber', 'Settings', function(isNumber, Settings) {
	return function(x) {
		if (Settings.decimalPlaces) {
			if (isNumber(x)) {
				return parseFloat(x).toFixed(Settings.decimalPlaces);
			} else {
				return x;
			}
		} else {
			return x;
		}
	};
}])

.filter('numberWithCommas', [function() {
	return function(num) {
		var parts = num.toString().split(".");
	    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	    return parts.join(".");
	};
}]);