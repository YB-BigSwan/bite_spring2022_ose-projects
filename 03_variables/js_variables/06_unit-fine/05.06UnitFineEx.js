function calculateUnitFine() {
	var income = Number(document.getElementById('txtNetIncome').value);

	var fine = (income - 255) / 60;

	document.getElementById('answerDiv').innerHTML =
		'Unit fine is ' + fine.toFixed(2) + ' euros.';
}
