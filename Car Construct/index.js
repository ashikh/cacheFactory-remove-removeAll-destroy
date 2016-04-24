function Car(carmake, carmodel, caryear) {
    this.carmake=carmake;
    this.carmodel=carmodel;
    this.caryear=caryear;
    this.carDetail = function(){
		alert('car make:'+this.carmake+'  '+'car model:'+this.carmodel+'  '+'car year:'+this.caryear);
	}
}

var car1=new Car("Honda", "Amaze", "2015");
var car2=new Car("Mahindra", "TUV300", "2015");
car1.carDetail();
car2.carDetail();
