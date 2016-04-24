$(document).ready(function(){
    var list=$("li");
    for(var num=0; num<list.length; num++) {
$(list[num]).prepend("<b>"+num+': '+"</b>");
    }
});