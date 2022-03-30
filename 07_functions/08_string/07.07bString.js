function processName() {
	let name = document.getElementById('name').value;
	let nameL = name.length;
	let caps = name.toUpperCase();
	let little = name.toLowerCase();
	let firstChar = name.charAt(0);
	let firstThreeChar = name.substr(0, 3);
	let muumi = name.indexOf('muumi');

	document.getElementById('upperCase').innerHTML =
		'With upper case letters: ' + caps;

	document.getElementById('lowerCase').innerHTML =
		'With lower case letters: ' + little;

	document.getElementById('length').innerHTML = 'Character count: ' + nameL;

	document.getElementById('firstCharacter').innerHTML =
		'First character: ' + firstChar;

	document.getElementById('manyCharacters').innerHTML =
		'First three characters: ' + firstThreeChar;

	if (muumi == true) {
		document.getElementById('contains').innerHTML = 'Contains the text muumi';
	} else {
		document.getElementById('contains').innerHTML =
			"Doesn't contain the text muumi.";
	}
}
