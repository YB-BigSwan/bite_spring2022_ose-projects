function calculate() {
	// get minutes worked-----------------------------------
	let sTime = document.getElementById('startTime').value;
	let eTime = document.getElementById('endTime').value;

	let sTimeHour = sTime.substr(0, 2);
	let sTimeMin = sTime.substr(3, 2);
	let eTimeHour = eTime.substr(0, 2);
	let eTimeMin = eTime.substr(3, 2);

	let sDate = new Date(2022, 0, 1, sTimeHour, sTimeMin);
	let eDate = new Date(2022, 0, 1, eTimeHour, eTimeMin);

	let diff = eDate - sDate;

	let minutes = Math.floor(diff / 1000 / 60);

	// is it a sunday?--------------------------------------

	let dateText = document.getElementById('date').value;
	let price;
	let wDay;
	let totalPrice;

	isSunday(dateText);

	if (output == true) {
		wDay = 'Sundays';
		price = 72;
		totalPrice = (price / 60) * minutes;
	} else {
		wDay = 'workdays';
		price = 48;
		totalPrice = (price / 60) * minutes;
	}

	document.getElementById('answer').innerHTML =
		'Length of the work was ' +
		minutes +
		' minutes.<br>' +
		'The hourly price is during the ' +
		wDay +
		' ' +
		price.toFixed(2) +
		' euros.<br>' +
		'The price of this repair work is ' +
		totalPrice.toFixed(2) +
		' euros.';
}

function isSunday(dateText) {
	let day = dateText.substr(0, 2);
	let month = dateText.substr(3, 2);
	let year = dateText.substr(6, 4);

	let asDate = new Date();
	asDate.setDate(day);
	asDate.setMonth(month - 1);
	asDate.setFullYear(year);

	let dow = asDate.getDay();

	if (dow == 0) {
		output = true;
	} else {
		output = false;
	}
}

function allCapsTitleTrimmed(text) {
	let cText = document.getElementById('title');
	cText.value = cText.value.trim().toUpperCase();
}
