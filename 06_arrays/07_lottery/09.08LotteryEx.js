var names = [];
var index = 0;
var addedName;

function addName() {
	addedName = document.getElementById('name').value;
	names.push(addedName);
	document.getElementById('name').value = '';

	index++;

	for (i = 0; i < names.length; i++) {
		document.getElementById('nameList').innerHTML =
			'Inserted names: ' + names.join(' ');
	}

	document.getElementById('answer').value = '';
}

function makeDraw() {
	var winningIndex = Math.floor(Math.random() * names.length);

	document.getElementById('answer').innerHTML =
		'<br>Winner is ' + names[winningIndex];
}
