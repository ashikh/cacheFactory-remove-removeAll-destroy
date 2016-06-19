var app=angular.module('myApp',[]);
	
	app.directive('detailDisplay', function(){
		return {
				restrict:'EA',
				templateUrl:'templates/data.html'
		};
	});
	
	app.factory('dataFactory', function(){
		var factory={};
		factory.empName='Shashank';
		factory.empAge='23';
		factory.empId='05';
		factory.empSal='24000';
				
		return factory;
	});

	app.controller('dataCtrl', function($scope,dataFactory) {
		$scope.empName=dataFactory.empName;
		$scope.empAge=dataFactory.empAge;
		$scope.empId=dataFactory.empId;
		$scope.empSal=dataFactory.empSal;
	});
	
	