appModule.directive('header', function(){
	return {
		restrict: 'A',
		templateUrl: "./app/views/Header.html",
		controller: 'headerController'
	}
	
});

appModule.controller('headerController', function($scope) {
	$scope.message ="EMPLOYEE PORTAL";
	
});