(function(){
	var app=angular.module('myapp', []);
	app.controller('myctrl1', function($scope)
		{
	$scope.text='This message was printed using 1st Controller';
	});
	app.controller('myctrl2', function($scope)
		{
	$scope.message='This message was printed using 2nd Controller';
	});
		}());