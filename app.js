// MODULE
var angularApp = angular.module('angularApp', ['ngRoute']);

// ROUTER

angularApp.config(function($routeProvider){

	$routeProvider

		.when('/', {
			templateUrl: 'pages/main.html', // get this html
			controller: 'mainController' // and bind it to this controller
		})

		.when('/second', {
			templateUrl: 'pages/second.html', // get this html
			controller: 'secondController' // and bind it to this controller
		})		

		.when('/second/:num', {
			templateUrl: 'pages/second.html', // get this html
			controller: 'secondController' // and bind it to this controller
		})

});

// CUSTOM SERVICES

angularApp.service('nameService', function() {

	var self = this;
	this.name = "John Doe";

	this.namelength = function() {
		return self.name.length;
	};

});


// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$log', 'nameService', function($scope, $log, nameService){

	$scope.name = nameService.name;

	$scope.$watch('name', function() {
		nameService.name = $scope.name;
		$log.log(nameService.name);

	});

	$log.log(nameService.name);
	$log.log(nameService.namelength());

}]);

angularApp.controller('secondController', ['$scope', '$log', '$routeParams', 'nameService', function($scope, $log, $routeParams, nameService){

	$scope.num = $routeParams.num || 1;

	$scope.name = nameService.name;

	$scope.$watch('name', function() {
		nameService.name = $scope.name;
	});

}]);




