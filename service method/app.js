var app=angular.module('myApp', []);
		app.service('Employee',function(){
			this.empName='Ajay';
			this.empAge='24';
			this.empSal='25000';
			});
			
		app.controller('myCtrl', function($scope,Employee){
			$scope.empName=Employee.empName;
			$scope.empAge=Employee.empAge;
			$scope.empSal=Employee.empSal;
			});