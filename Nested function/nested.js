function f_outer() {
    function f_inner() {
        var x=10;
    document.writeln('Value of x:'+x);
     document.writeln('<br>inner function called');   
    }
    f_inner();
}

f_outer();

