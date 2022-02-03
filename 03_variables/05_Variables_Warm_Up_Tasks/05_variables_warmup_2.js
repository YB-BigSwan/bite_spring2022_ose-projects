// 05_variables_warmup_2 JavasScript code
function add() {
	var x = Number(document.getElementById('txtFirst').value);

	var y = Number(document.getElementById('txtSecond').value);

	var sum = x + y;

	document.getElementById('pOutput').innerHTML = x + '+' + y + '=' + sum;
}
