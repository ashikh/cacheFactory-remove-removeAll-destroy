var app=angular.module('myApp', []);
		app.service('dataService',function($http){
			this.allUsers=[];
			this.regUsers=function(callback) {
				$http.get('usersList.json')
				.success(callback)
				.error(function(err){
					console.log(err);
				});
			};
		});
		app.controller('usersCtrl', function($scope,dataService){
			$scope.users=[];
			dataService.regUsers(function(data){
				$scope.users=data;
			})
			});