var app=angular.module('myApp',[]);
	
	app.factory('newFactory', function($cacheFactory){
		var cache=$cacheFactory('newFactory',{capacity:5});
		return cache;
	});

	app.controller('myCtrlr', function($scope, newFactory) {
		//info
		var output=newFactory.info();
		console.log(output);
		//put
		output=newFactory.put('name','Ranjith');
		console.log('(put)name:'+output);
		document.getElementById('temp1').innerHTML='(put)name:'+output;
		output=newFactory.put('place','Bangalore');
		console.log('(put)place:'+output);
		document.getElementById('temp2').innerHTML='(put)place:'+output;
		//get
		output=newFactory.get('name');
		console.log('(get)name:'+output);
		document.getElementById('temp3').innerHTML='(get)name:'+output;
		output=newFactory.get('place');
		console.log('(get)place:'+output);
		document.getElementById('temp4').innerHTML='(get)place:'+output;
		//remove
		output=newFactory.remove('name');
		output=newFactory.get('name');
		console.log('name(after remove operation):'+output);
		document.getElementById('temp5').innerHTML='name(after remove operation):'+output;
		//removeAll
		output=newFactory.removeAll();
		output=newFactory.get('place');
		console.log('output after removeAll operation:'+output);
		document.getElementById('temp6').innerHTML='output after removeAll operation:'+output;
		//destroy
		output=newFactory.destroy();
		console.log('output after destroy operation:'+output);
		document.getElementById('temp7').innerHTML='output after destroy operation:'+output;
	});