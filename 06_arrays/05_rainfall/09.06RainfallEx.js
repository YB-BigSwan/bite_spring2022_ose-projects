var rainfall = [
	47.0, 36.6, 34.7, 37.0, 41.9, 47.5, 61.7, 74.8, 65.4, 69.7, 66.1, 54.6,
];

var aRain = 0;

function calculateSum() {
	for (i = 0; i < rainfall.length; i++) {
		aRain += rainfall[i];
	}

	document.getElementById('answer').innerHTML =
		'The annual rainfall in Helsinki is ' + aRain.toFixed(1) + ' mm.';
}
