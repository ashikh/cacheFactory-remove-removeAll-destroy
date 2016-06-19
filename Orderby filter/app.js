var app=angular.module('myapp', []);
	app.controller('myctrl', function($scope)
		{
	$scope.session=[{name:'Ravi',topic:'HTML'}, {name:'Gaurav',topic:'CSS'}, {name:'Amit',topic:'Javascript'}, {name:'Dhanush',topic:'Bootstrap'}, {name:'Hari',topic:'AngularJS'}];
	});