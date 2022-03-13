var bloodTypes = [
	'A+',
	'O-',
	'AB+',
	'O+',
	'AB+',
	'AB+',
	'O-',
	'AB+',
	'O-',
	'AB+',
];

let count = {};

bloodTypes.forEach((element) => {
	count[element] = (count[element] || 0) + 1;
});

var total = 0;

for (var i in count) {
	total += parseInt(count[i], 10);
}

for (var i in count) {
	count[i] = (count[i] / total) * 100 + '%';
	document.getElementById('output').innerHTML += '<br>' + count[i] + ': ' + i;
}

// Kasper. If you are reading this, these projects were cruel. haha I lost so may hours googling, trying to find an elegant solution. GG well played. Sorry that exercise 4 is a little bit janky(slang - 'of extremely poor or unreliable quality). It still works though :D
