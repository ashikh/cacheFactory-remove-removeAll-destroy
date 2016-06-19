var app=angular.module('myApp', []);
		app.controller('myCtrl', function($scope){
			$scope.msg='This message is displayed in controller scope';
		});
		app.directive('txtDisplay', function(){
			return {
				restrict:'EA',
				scope:{
					txt:'=myDisp'
				},
				templateUrl:'templates/disp.html'
			};
		});