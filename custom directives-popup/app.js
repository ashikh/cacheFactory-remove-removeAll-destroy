var app=angular.module('myApp',[]);
	app.directive('myElement', function(){
		return {
			restrict:'EAM',
			replace:true,
			template:"<button onclick='popup()'>Click here for pop up</button>"
		};
	});