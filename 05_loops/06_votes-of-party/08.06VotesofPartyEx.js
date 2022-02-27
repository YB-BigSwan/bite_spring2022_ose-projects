function showComparisonScores() {
	var v = Number(document.getElementById('votes').value);
	var c = Number(document.getElementById('candidates').value);
	var o = '';

	for (var i = 1; i <= c; i++) {
		n = v / i;
		o += i + '.' + ' candidate:' + n.toFixed(0) + '<br>';
	}
	document.getElementById('answer').innerHTML = o;
}
