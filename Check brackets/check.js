function checkBrackets(express) {
    var opening=express.match(/\(/g);
    var closing=express.match(/\)/g);
    var opener=express.lastIndexOf('(');
    var closer=express.indexOf(')');
    if ((opening.length==closing.length) &  (opener < closer))  {
           document.writeln('correct');
} else {
            document.writeln('incorrect');
                }
}
checkBrackets('( ( a + b ) / 5 abd )');
checkBrackets(') ( a + b ) )');
checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 abc / ( a + 3 ) ) ) )');