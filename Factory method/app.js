var app=angular.module('myApp', []);
		app.factory('Employee',function(){
			var factory={};
			
			factory.empName='Arjun';
			factory.empAge='22';
			factory.empSal='20000';
			
			return factory;
			});
			
		app.controller('myCtrl', function($scope,Employee){
			$scope.empName=Employee.empName;
			$scope.empAge=Employee.empAge;
			$scope.empSal=Employee.empSal;
			});