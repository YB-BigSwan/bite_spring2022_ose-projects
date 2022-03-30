function randomInteger(from, to) {
	return Math.round(Math.random() * 5 + 1);
}

function rollTheDice() {
	let diceValue = randomInteger(1, 6);

	document.getElementById('dice').innerHTML = diceValue;
}
