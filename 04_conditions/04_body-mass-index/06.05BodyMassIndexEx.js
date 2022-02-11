function calculateBMI() {
	var w = Number(document.getElementById('weight').value);

	var h = Number(document.getElementById('height').value);

	var bmi = w / ((h / 100) * (h / 100));

	var bmiclass;

	if (bmi <= 18.4) {
		bmiclass =
			'Body Mass Index (BMI) is ' +
			bmi.toFixed(2) +
			' (Weight less than normal weight)';
	} else if (bmi >= 18.5 && bmi <= 24.9) {
		bmiclass =
			'Body Mass Index (BMI) is ' + bmi.toFixed(2) + ' (Normal weight)';
	} else {
		bmiclass = 'Body Mass Index (BMI) is ' + bmi.toFixed(2) + ' (Overweight)';
	}

	document.getElementById('answer').innerHTML = bmiclass;
}
