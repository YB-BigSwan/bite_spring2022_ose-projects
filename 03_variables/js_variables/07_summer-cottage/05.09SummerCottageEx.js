function calculateRent() {
	var rent = Number(document.getElementById('rent').value);
	var participants = Number(document.getElementById('participants').value);

	var individualRent = rent / participants;

	document.getElementById('answerDiv').innerHTML =
		'Rent per participants is ' + individualRent.toFixed(2) + ' euros.';
}
