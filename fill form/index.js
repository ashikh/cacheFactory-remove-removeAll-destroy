var ageValue=document.getElementsByName('age'),
        ageBlock=document.getElementById('p1');
    ageValue.addEventListener(onchange, function() {
            ageValue.appendTo(ageBlock);
                });