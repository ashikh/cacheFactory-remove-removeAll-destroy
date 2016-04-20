function func() {
    var num = document.getElementById('numeral');
    var textValue = document.forms["form1"]["number"].value;
    var RegExp=/[0-9]/g;
    if(RegExp.test(textValue)) {
       num.style.backgroundColor="white";
       }
    else {
        num.style.backgroundColor="red";
        num.readOnly="true";
        setTimeout(function() {
                 num.style.backgroundColor="white";
        }, 3000);
    }
}