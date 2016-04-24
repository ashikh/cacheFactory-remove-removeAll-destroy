function outer(x) {
    function inner(y) {
        var result=x * y;
        document.writeln('Product of x and y is:'+result);
    }
    return inner;
}
var f1=outer(9);
f1(3);