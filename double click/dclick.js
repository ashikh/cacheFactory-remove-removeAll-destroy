$(document).ready(function(){
        $("#p1").dblclick(function(){
                $(this).append("<p>This is a double-click Event</p>");
                });
        $("#p1").click(function(){
                $(this).append("<p>This is a click Event</p>");
                }); 
    });