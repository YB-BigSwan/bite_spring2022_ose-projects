// Create an array with minigolf results of eight players
var minigolf = [23, 19, 37, 20, 21, 30, 26, 24];

function showResults() {
	// Sort the array
	minigolf.sort();
	// Assign the smallest result of to a variable
	var small = minigolf[0];
	// Assign the index of last array item to an variable
	var last = minigolf[minigolf.length - 1];
	// Assign the biggest result to a variable
	var large = last;

	// Write the answer on the page, to the answer div, as content of the div
	document.getElementById('answer').innerHTML =
		'The smallest result is ' +
		small +
		' (winner).<br>The biggest result is ' +
		large +
		'.';
}
