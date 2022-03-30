function processName() {
	let name = document.getElementById('name').value;
	let nameL = name.length;

	let caps = name.toUpperCase();

	let little = name.toLowerCase();

	document.getElementById('upperCase').innerHTML =
		'With upper case letters: ' + caps;

	document.getElementById('lowerCase').innerHTML =
		'With lower case letters: ' + little;

	document.getElementById('length').innerHTML = 'Character count: ' + nameL;
}
