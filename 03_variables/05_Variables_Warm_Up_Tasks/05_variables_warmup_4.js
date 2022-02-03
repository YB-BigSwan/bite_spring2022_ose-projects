// 05_variables_warmup_4 JavasScript code
function showHoursAndMinutes() {
	var a = Number(document.getElementById('txtMinutes').value);

	var hours = Math.floor(a / 60);
	var minutes = a % 60;
	var hoursAndMinutes = hours + ' ' + 'h' + ' ' + minutes + ' ' + 'min';

	document.getElementById('pOutput').innerHTML = hoursAndMinutes;
}
