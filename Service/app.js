var app=angular.module('myApp', []);
		app.service('dataService',function(){
			this.empName='Dhanush';
			this.empAge='25';
			this.empId='123';
			this.empSal='27000';
			});
			
		app.controller('myCtrl', function($scope,dataService){
			$scope.empName=dataService.empName;
			$scope.empAge=dataService.empAge;
			$scope.empId=dataService.empId;
			$scope.empSal=dataService.empSal;
			});