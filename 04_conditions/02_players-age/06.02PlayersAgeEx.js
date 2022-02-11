function checkAge() {
	// assign the age input field value into a variable
	var age = Number(document.getElementById('age').value);
	//if age smaller than 18{}
	var underage = 'Adolescents are not allowed to play.';

	var ok = 'Old enough to play.';

	if (age < 18) {
		document.getElementById('answer').innerHTML = underage;
	}

	// assign text "Adolescents are not allowed to play." to a variable

	// otherwise
	else {
		document.getElementById('answer').innerHTML = ok;
	}
	// assign text "Old enough to play." to a variable

	// Write the answer to the web page DOM, in the answer div, as the content
}
