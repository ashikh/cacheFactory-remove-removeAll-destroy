var app=angular.module('myApp', []);
		app.constant('NEW_CONST', 'Regular Constant Service');
		app.controller('myCtrl', function($scope, NEW_CONST){
			$scope.message='The name of constant service is '+NEW_CONST;
			$scope.text=NEW_CONST+' is used in AngularJS';
		});