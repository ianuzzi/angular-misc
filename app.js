// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$filter', '$http', 
									function($scope, $filter, $http){

	$scope.handle = '';

	$scope.lowercasehandle = function() {
		return $filter('lowercase')($scope.handle);
	};

	$scope.characters = 5;

	// A traditional call to XMLHttpRequest would look like:

	// var rulesrequest = new XMLHttpRequest();
	// rulesrequest.onreadystatechange = function() {

	// 	$scope.apply(function(){
	// 		if(rulesrequest.readyState == 4 && rulesrequest.status == 200){
	// 			$scope.rules = JSON.parse(rulesrequest.responseText);
	// 		}
	// 	});
	// };

	// rulesrequest.open("GET", "./api/rules.json", true);
	// rulesrequest.send();

	// We can do it a lot easier with Angular using:

	$http.get('./api/rules.json')
		.success(function(result){
			$scope.rules = result;
		})
		.error(function(data, status){
			console.log(data);
		});

	$scope.newRule = '';

	$scope.addRule = function(){
		$http
			.post('/api/rules.json', {'newRule': $scope.newRule})
			.success(function(result){
				$scope.rules = result; // update the rules with the returned value inclusding the new rule
				$scope.newRule = ''; // clear the newRule variable (clears the textbox as well)
			})
			.error(function(data, status){
				console.log(data);
				$scope.newRule = ''; // clear the newRule variable (clears the textbox as well)

			});
	};

}]);



