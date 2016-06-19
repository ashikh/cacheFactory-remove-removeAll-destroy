var app=angular.module('myApp', []);
		app.controller('myCtrl', function($scope){
			$scope.msg='This is my message';
		});
		app.directive('txtDisplay', function(){
			return {
				restrict:'EA',
				scope:{},
				templateUrl:'templates/disp.html'
			};
		});