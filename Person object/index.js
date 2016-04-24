var details = (function () {
var person=new Object();
    person = { firstname:'Raj',lastname:'Kumar', phone:'8878684321', email:'raj.kumar@mail.com' };
    return function() {
//appending properties respectively
document.getElementById('firstName').innerHTML=person.firstname;
document.getElementById('lastName').innerHTML=person.lastname;
document.getElementById('email').innerHTML=person.email;
document.getElementById('number').innerHTML=person.phone;
}
})();
details();