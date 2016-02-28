function calcCircleArea(r) {
    var Area;
    Area = Math.PI * r * r;
    document.writeln('r = ' + r + ';  ' + 'Area = ' + Area + '<br>'); 
}
var radius;
radius=7; calcCircleArea(radius);
radius=1.5; calcCircleArea(radius);
radius=20; calcCircleArea(radius);