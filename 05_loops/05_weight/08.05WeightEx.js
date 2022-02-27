function showWeightGoals() {
	var weight = Number(document.getElementById('weight').value);
	var weeklyLoss = (weight * 0.1) / 7;
	var output = '';

	for (var i = 1; i <= 7; i++) {
		weeklyWeight = weight -= weeklyLoss;
		output +=
			'After ' + i + '.' + ' week ' + weeklyWeight.toFixed(1) + ' kg<br>';
	}

	document.getElementById('answer').innerHTML = output;
}
