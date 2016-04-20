address=prompt('enter email address');
var m=function (mail)
{
    var validmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(validmail.test(mail))
    document.write('true');
    else
    document.write('false')
}
m(address);
