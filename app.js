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

angularApp.directive("searchResult", function() {
	return {
		templateUrl: 'directives/searchresult.html',
		replace: true
	};
});


// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$log', 'nameService', function($scope, $log, nameService){



}]);

angularApp.controller('secondController', ['$scope', '$log', '$routeParams', 'nameService', function($scope, $log, $routeParams, nameService){



}]);




