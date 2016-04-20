function fn() {
var i, x=document.getElementsByTagName('tr');
    for(i=0;i<x.length;i++) {
    if (x[i].rowIndex % 2== 0) {
        x[i].setAttribute('class', 'hide');
        }
    }
}