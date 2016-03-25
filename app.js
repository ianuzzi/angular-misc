// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', function ($scope, $log) {
	$log.log('Hello');
	$log.info('Hello');
	$log.warn('Hello');
	$log.debug('Hello');
	$log.error('Hello');
});



