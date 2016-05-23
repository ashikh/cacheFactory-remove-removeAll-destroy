function leftRight() { 
	var ae = document.getElementById("available"); 
	var se = document.getElementById("selected"); 
	for (i=0;i<ae.options.length;i++) { 
	if (ae.options[i].selected) { 
	var opt = ae.options[i]; 
	se.options[se.options.length] = new Option(opt.innerHTML, opt.value); 
	ae.options[i] = null; 
	i = i - 1; 
	} 
	}
	function outerfn(availEmp) {
    function innerfn(selEmp) {
    document.getElementById('availNum').innerHTML=" - showing "+availEmp;
	document.getElementById('selNum').innerHTML=" - showing "+selEmp;
    }
    return innerfn;
	}
	var fun=outerfn(ae.options.length);
	fun(se.options.length);
	}
function leftRightAll() { 
	var ae = document.getElementById("available"); 
	var se = document.getElementById("selected"); 
	for (i=0;i<ae.options.length;i++) { 
	var opt = ae.options[i]; 
	se.options[se.options.length] = new Option(opt.innerHTML, opt.value); 
	} 
	ae.options.length = 0;
	function outerfn(availEmp) {
    function innerfn(selEmp) {
    document.getElementById('availNum').innerHTML=" - showing "+availEmp;
	document.getElementById('selNum').innerHTML=" - showing "+selEmp;
    }
    return innerfn;
	}
	var fun=outerfn(ae.options.length);
	fun(se.options.length);
	} 
function rightLeft() { 
	var ae = document.getElementById("available"); 
	var se = document.getElementById("selected"); 
	for (i=0;i<se.options.length;i++) { 
	if (se.options[i].selected) { 
	var opt = se.options[i]; 
	ae.options[ae.options.length] = new Option(opt.innerHTML, opt.value); 
	se.options[i] = null; 
	i = i - 1; 
	} 
	} 
	sortAvailable();
	function outerfn(availEmp) {
    function innerfn(selEmp) {
    document.getElementById('availNum').innerHTML=" - showing "+availEmp;
	document.getElementById('selNum').innerHTML=" - showing "+selEmp;
    }
    return innerfn;
	}
	var fun=outerfn(ae.options.length);
	fun(se.options.length);
	} 
function rightLeftAll() { 
	var ae = document.getElementById("available"); 
	var se = document.getElementById("selected"); 
	for (i=0;i<se.options.length;i++) { 
	var opt = se.options[i]; 
	ae.options[ae.options.length] = new Option(opt.innerHTML, opt.value); 
	} 
	se.options.length = 0; 
	sortAvailable();
	function outerfn(availEmp) {
    function innerfn(selEmp) {
    document.getElementById('availNum').innerHTML=" - showing "+availEmp;
	document.getElementById('selNum').innerHTML=" - showing "+selEmp;
    }
    return innerfn;
	}
	var fun=outerfn(ae.options.length);
	fun(se.options.length);
	} 
function sortAvailable() { 
	var ae = document.getElementById("available"); 
	var srt = ""; 
	for (i=0;i<ae.options.length;i++) { 
	if (srt > "") srt +=","; 
	srt += ae.options[i].innerHTML + "~" + ae.options[i].value; 
	} 
	var asrt = srt.split(",") 
	asrt = asrt.sort(); 
	ae.options.length = 0 
	for (i=0;i<asrt.length;i++) { 
	var opt = asrt[i].split("~"); 
	ae.options[i] = new Option(opt[0],opt[1]); 
	} 
	}
function filter() {
	var regExp=/[A-Za-z]/;
	var filt= document.getElementById('filterValue').value;
	if(regExp.test(filt))
	var ae = document.getElementById("available");  
	for (i=0;i<ae.options.length;i++) { 
	(ae.options[i].selected)
	}
}
function frmSubmit() { 
	var se = document.getElementById("selected"); 
	for (i=0;i<se.options.length;i++) { 
	se.options[i].selected = true; 
	} 
	document.form1.submit(); 
	} 