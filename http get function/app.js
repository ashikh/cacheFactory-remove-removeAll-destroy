var app=angular.module('myApp', []);
		app.service('dataService',function($http){
			this.allStudents=[];
			this.regStudents=function(callback) {
				$http.get('data.json')
				.success(callback)
				.error(function(err){
					console.log(err);
				});
			};
		});	
		app.controller('studCtrl', function($scope,dataService){
			$scope.students=[];
			dataService.regStudents(function(data){
				$scope.students=data;
			})
			});
		app.directive('temp', function(){
			return {
			restrict:'EA',
			template:"Name:{{student.name}}{{'; '}}Place:{{student.place}}"	
			};
		});