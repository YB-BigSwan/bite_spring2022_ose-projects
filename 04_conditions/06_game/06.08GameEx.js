function play() {
	var bet = Number(document.getElementById('bet').value);
	var pips = Math.round(Math.random() * 5 + 1);
	var a;

	if (pips === (1, 3, 5)) {
		var a = 'Pips was ' + pips + '-no pay';
	} else if (pips === (2, 4)) {
		var a =
			'Pips was ' + pips + '-Paid back: ' + bet * (1.25).toFixed(2) + ' euros';
	} else if (pips === 6) {
		var a =
			'Pips was ' + pips + '-Paid back: ' + bet * (1.5).toFixed(2) + ' euros';
	}

	document.getElementById('answer').innerHTML = a;
}
