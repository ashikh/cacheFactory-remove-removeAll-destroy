function findMaxSequence(expression) { 
   var result, prev = 0, current = new Array(),
   max = current;
    for (var i=0; i< expression.length; i++) {
      if (prev < expression[i]) {
         current.push(expression[i]);
         if (max.length < current.length) {
            max = current;
         }
      } 
        else
        {
         current = [expression[i]];
      }
      prev = expression[i];
   }
    result = max.join(', ');
    if(max.length < 2) {
        return 'no';
    }
                else
    {
        return '['+ result+']';
    }
}
document.writeln(findMaxSequence([3, 2, 3, 4, 2, 2, 4])+'<br>');
document.writeln(findMaxSequence([3, 5, 4, 6, 1, 2, 3, 6, 10, 32])+'<br>');
document.writeln(findMaxSequence([3, 2, 1]));