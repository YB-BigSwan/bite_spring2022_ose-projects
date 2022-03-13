function showBloodType() {
	var bloodTypes = [
		'A+',
		'O-',
		'AB+',
		'O+',
		'AB+',
		'AB+',
		'O-',
		'AB+',
		'O-',
		'AB+',
	];
	var inputTxt = document.getElementById('bType').value;
	var counter = 0;

	for (i = 0; i < 10; i++) {
		document.getElementById('bType').value = '';

		if (inputTxt == bloodTypes[i]) {
			counter++;
		}
	}

	percent = (counter / 10) * 100;

	document.getElementById('output').innerHTML =
		inputTxt + ' ' + percent + ' percent';
}
