function calculateCosts() {
	var km = Number(document.getElementById('kilometers').value);

	var consumption = Number(document.getElementById('consumption').value);

	var price = Number(document.getElementById('price').value);

	var participant = Number(document.getElementById('participants').value);

	var cost = ((consumption / 100) * price * km) / participant;

	document.getElementById('answerId').innerHTML =
		'Fuel costs per participant is ' + cost.toFixed(2) + ' euros.';
}
