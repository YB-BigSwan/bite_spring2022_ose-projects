function calculateProfit() {
	var r = Number(document.getElementById('rounds').value);
	var wCount = 0;
	for (i = 0; i <= r; i++) {
		var pips = Math.round(Math.random() * 5 + 1);
		if (pips === (1, 3, 5)) {
		} else if (pips === (2, 4)) {
			wCount++;
		} else if (pips === 6) {
			wCount++;
		}

		p = r - wCount;

		document.getElementById('answer').innerHTML =
			'Bets were altogether ' +
			r.toFixed(2) +
			' euros<br>' +
			'Wins were ' +
			wCount.toFixed(2) +
			' euros<br>' +
			'Profit was ' +
			p.toFixed(2) +
			' euros';
	}
}
