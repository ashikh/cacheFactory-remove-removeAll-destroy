var i;
    for (i = 1; i <= 100; i++) {
        if (i % 15 === 0) {
                document.writeln(i + ' FizzBuzz' + '<br>');
        }
        else if (i % 5 === 0) {
                document.writeln(i + ' Buzz' + '<br>');
        }
        else if (i % 3 === 0) {
                document.writeln(i + ' Fizz' + '<br>');
        }
        else {
                document.writeln(i+'<br>');
        }
    }
        