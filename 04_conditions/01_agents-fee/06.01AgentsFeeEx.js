function calculateFee() {
	// Read value from the input field
	var price = Number(document.getElementById('price').value);

	// Calculate fee, save the result to a variable
	var fee = price * 0.0344;
	// if the fee is under minimum, update it
	if (fee < 2400) {
		document.getElementById('fee').innerHTML =
			"Real state agent's fee is 2400.00 euros";
	}

	// Write the answer on the page, to the fee div, as content of the div
	else {
		document.getElementById('fee').innerHTML =
			"Real state agent's fee is" + fee.toFixed(2) + ' euros';
	}
}
