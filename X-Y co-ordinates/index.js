function cursor(pos)
        {
var currentTime=new Date();
currentTime=currentTime.toString();
var positionX = pos.clientX;
var positionY = pos.clientY;
var position  = document.getElementById("coordinates");
var coOrdinates='X:'+positionX+';'+'Y:'+positionY+'; Time:'+currentTime;
position.innerHTML=coOrdinates;
        }