appModule.directive('footer', function(){
	return {
		restrict: 'A',
		templateUrl: "./app/views/Footer.html",
		controller: 'footerController'
	}
});

appModule.controller('footerController', function($scope) {
	$scope.footerMessage ="This is the footer";
});