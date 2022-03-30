function tellAge() {
	let yearOfBirth = Number(document.getElementById('yearOfBirth').value);

	let today = new Date();

	let currentYear = today.getFullYear();

	let age = currentYear - yearOfBirth;

	if (age <= 0) {
		document.getElementById('answer').innerHTML =
			'Error, please enter valid year.';
	} else {
		document.getElementById('answer').innerHTML =
			'You are now ' +
			age +
			' years old.<br>' +
			'(Current year is ' +
			currentYear +
			'.)';
	}
}
