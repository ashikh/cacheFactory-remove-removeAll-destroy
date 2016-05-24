Person=function (name){
	this.name = name;
	console.log('person created');
}
Person.prototype.sayName = function(){
	alert("the name is "+this.name);
}
var personOb = new Person("Kumar");
personOb.sayName();
Student=function (){
	console.log('student created');
}
Student.prototype = personOb;
Student.prototype.name = "Raj Kumar";
Student.prototype.constructor = Student;
var studentOb = new Student();
studentOb.sayName();
console.log('name property changed');