// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$timeout', function($scope, $timeout){

	$scope.name = "Art";
	$timeout(function(){
		$scope.name = "Everybody";
	}, 3000);
}]);



