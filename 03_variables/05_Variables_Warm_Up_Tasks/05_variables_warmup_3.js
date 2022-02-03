// 05_variables_warmup_3 JavasScript code
function showMinutes() {
	var a = Number(document.getElementById('txtHours').value);

	var b = Number(document.getElementById('txtMinutes').value);

	var c = a * 60;

	var d = b + c;

	document.getElementById('pOutput').innerHTML = d + ' ' + 'minutes';
}
