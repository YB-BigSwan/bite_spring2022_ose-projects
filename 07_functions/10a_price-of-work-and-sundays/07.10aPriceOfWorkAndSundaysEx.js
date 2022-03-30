function calculate() {
	let dateText = document.getElementById('date').value;
	let price;
	let wDay;

	let day = dateText.substr(0, 2);
	let month = dateText.substr(3, 2) - 1;
	let year = dateText.substr(6, 4);

	let asDate = new Date();
	asDate.setDate(day);
	asDate.setMonth(month);
	asDate.setFullYear(year);

	if (asDate.getUTCDay() == 0) {
		wDay = 'Sunday';
		price = 72;

		document.getElementById('answer').innerHTML =
			'<p>Date ' +
			dateText +
			' (' +
			wDay +
			')<br>' +
			'The price of this repair work is ' +
			price +
			' euros per hour.</p>';
	} else {
		wDay = 'work day';
		price = 48;
		document.getElementById('answer').innerHTML =
			'<p>Date ' +
			dateText +
			' (' +
			wDay +
			').<br>' +
			'The price of this repair work is ' +
			price +
			' euros per hour.</p>';
	}
}

function isSunday(dateText) {}
