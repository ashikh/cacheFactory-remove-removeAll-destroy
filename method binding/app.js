var app=angular.module('myApp', []);
		app.controller('myCtrl', function($scope){
			$scope.msg='This message is displayed using parent scope';
			$scope.alrtMsg=function(){
			alert('This message is displayed using method binding in isolated scope');	
			};
		});
		app.directive('txtDisplay', function(){
			return {
				restrict:'EA',
				scope:{
					txt:'=myDisp',
					alrtMsg:'&dispMethod'
				},
				templateUrl:'templates/disp.html'
			};
		});