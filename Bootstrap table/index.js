function newUser() {
	document.getElementById('registerBtn').setAttribute('class','hide');
	document.getElementById('register').setAttribute('class','show');
}

function saveUser() {
	document.getElementById('dName').innerHTML=document.getElementById('full-name').value;
	document.getElementById('dAge').innerHTML=document.getElementById('age').value;
	document.getElementById('dCity').innerHTML=document.getElementById('city').value;
	document.getElementById('fContainer').setAttribute('class','hide');
	document.getElementById('register').setAttribute('class','hide');
	document.getElementById('dTable').setAttribute('class','show');
}