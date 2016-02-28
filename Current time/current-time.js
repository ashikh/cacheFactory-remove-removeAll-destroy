var currentTime=new Date();
var currentHour=currentTime.getHours();
var currMin=currentTime.getMinutes();
if (currMin <= 9) {
document.write('The current time is: '+currentHour+':0'+currMin+'<br>Please check console');
console.log('The current time is: '+currentHour+':0'+currMin);
    }
else {
document.write('The current time is: '+currentHour+':'+currMin+'<br>Please check console');
console.log('The current time is: '+currentHour+':'+currMin);
}
