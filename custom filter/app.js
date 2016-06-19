var app=angular.module('myapp', []);
	
	
	app.controller('myctrl', function($scope){
	$scope.session=[{
		name:'Ravi',topic:'HTML',time:'09:00-10:30'},
		{name:'Gaurav',topic:'CSS',time:'10:45-11:30'},
		{name:'Amit',topic:'Javascript',time:'11:45-13:30'},
		{name:'Dhanush',topic:'Bootstrap',time:'14:00-15:30'},
		{name:'Hari',topic:'AngularJS',time:'16:00-18:00'}];
	$scope.time=['09:00-10:30', '10:45-11:30', '11:45-13:30', '14:00-15:30', '16:00-18:00'];
	});
	
	app.filter('duration', function(){
		return function(y){
	var tim=y;
	var h1, h2, m1, m2;
	h1=Number(tim.slice(0,2));
	m1=Number(tim.slice(3,5));
	h2=Number(tim.slice(6,8));
	m2=Number(tim.slice(9,11));
	if(m2>m1){
		return tim=(((h2-h1)*60)+(m2-m1));
	}
	else{
		return tim=(((h2-h1)*60)-(m1-m2));
	}	
		}
	});