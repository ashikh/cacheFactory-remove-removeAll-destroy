function foper() {
    var operObj=new Object();
    
    function add(a, b) {
        var res=a+b;
        return res;
    }
    
    function sub(a, b) {
        var res=a-b;
        return res;
    }
    
    function mul(a, b) {
        var res=a*b;
        return res;
    }
    
    function divide(a, b) {
        var res=a/b;
        return res;
    }
    
    operObj.add=add;
    operObj.sub=sub;
    operObj.mul=mul;
    operObj.divide=divide;
    return operObj;
}
var func = new foper();
alert('The result of addition is: '+func.add(9,3));
alert('The result of subtraction is: '+func.sub(9,3));
alert('The result of multiplication is: '+func.mul(9,3));
alert('The result of division is: '+func.divide(9,3));