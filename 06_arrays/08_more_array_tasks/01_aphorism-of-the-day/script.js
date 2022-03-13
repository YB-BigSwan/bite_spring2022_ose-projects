var aphorism = [
	'Actions speak louder than words.',
	'All for one and one for all.',
	'Early to bed, early to rise, makes a man healthy, wealthy, and wise.',
	'You made your bed, now lie in it.',
	'A penny saved is a penny earned.',
];

aNumber = Math.floor(Math.random() * 5);
outputTxt = aphorism[aNumber];

document.getElementById('output').innerHTML = outputTxt;
