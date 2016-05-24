function fn() {
if(this.type==="2-Wheeler") {
twoWheeler=new vehicle();	
twoWheeler.prototype=vehicle.prototype;
}
else {
fourWheeler=new vehicle();
fourWheeler.prototype=vehicle.prototype;
}
vehicle.prototype.displayRecord=function() {
	document.getElementById('vehicle').setAttribute('class','hide');
	document.getElementById('vehicleS').setAttribute('class','show');
	document.getElementById('W2').setAttribute('class','show');
	document.getElementById('nameS').innerHTML=this.name;
	document.getElementById('descS').innerHTML=this.description;
	document.getElementById('cpkS').innerHTML=this.costPerKm;
	document.getElementById('vtypeS').innerHTML=this.type;
		if(this.type==="4-Wheeler") {
	document.getElementById('W2').setAttribute('class','hide');
	document.getElementById('W4').setAttribute('class','show');
	document.getElementById('FT').setAttribute('class','show');
	document.getElementById('fuelTypeS').innerHTML=this.fuel;
	}
	}
	if(this.type==="2-Wheeler"){
    twoWheeler.displayRecord();
	}
	else {
	document.getElementById('vehicle').setAttribute('class','hide');
	document.getElementById('vehicleS').setAttribute('class','show');
	fourWheeler.displayRecord();
	}
}
function vehicle() {
	this.name=document.getElementById('vName').value;
	this.description=document.getElementById('vDesc').value;
	this.costPerKm=document.getElementById('vCpk').value;
	this.type=document.getElementById('veh').value;
	if(this.type==="4-Wheeler")
		{
	document.getElementById('fuel').setAttribute('class','show');
	this.fuel=document.getElementById('fuelT').value;
	}
}