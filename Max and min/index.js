//Provide input here
    seq=[3, 6, 1, 9, 5, 2];
        var i=0,
        n=seq.length,
        max=min=seq[0];
        for(i=1; i<n; i++)
            {
                max=Math.max(max, seq[i]);
                min=Math.min(min, seq[i]);
            }
document.writeln('Entered input sequence:'+seq)
document.write('<br>Max number='+max+'<br>Min number='+min);