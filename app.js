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
		restrict: 'E',
		templateUrl: 'directives/searchresult.html',
		replace: true,
		scope: {
			personObj: "=personObject",
			formattedAddressFunction: "&"
		},
		transclude: true
	};
});


// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$log', 'nameService', function($scope, $log, nameService){

		$scope.people = [ 
			{
			name: 'John Doe',
			address: '555 Main Street',
			city: 'New York',
			state: 'NY',
			zip: '11111'
			},
			{
			name: 'Jane Doe',
			address: '333 Second Street',
			city: 'Buffalo',
			state: 'NY',
			zip: '22222'
			},
			{
			name: 'George Doe',
			address: '111 Third Street',
			city: 'Miami',
			state: 'FL',
			zip: '33333'
			}
		]

	$scope.formattedAddress = function(person) {

		return person.address + ', ' + person.city + ', ' + person.state + ' ' + person.zip;

	};

}]);

angularApp.controller('secondController', ['$scope', '$log', '$routeParams', 'nameService', function($scope, $log, $routeParams, nameService){



}]);




