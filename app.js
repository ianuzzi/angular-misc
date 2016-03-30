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

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$log', function($scope, $log){

	$scope.name = 'Main';

}]);

angularApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams){

	$scope.num = $routeParams.num || 1; // if first item exists, us it, otherwise use 1

}]);




