// 05_variables_warmup_5 JavasScript code
function calculate() {
	var sBalance = Number(document.getElementById('txtStartingBalance').value);

	var interest = Number(document.getElementById('txtInterestRate').value);

	var a = sBalance * (interest / 100) + sBalance;
	var b = a * (interest / 100) + a;

	document.getElementById('pOutput').innerHTML =
		'1. year:' + a.toFixed(2) + '<br>' + '2. year:' + b.toFixed(2);
}
