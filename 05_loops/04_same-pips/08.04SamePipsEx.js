var pips1 = Math.round(Math.random() * 5 + 1);
var pips2 = Math.round(Math.random() * 5 + 1);
var pRoll = 1;
while (pips1 !== pips2) {
	pips1 = Math.round(Math.random() * 5 + 1);
	pips2 = Math.round(Math.random() * 5 + 1);
	pRoll++;
}

document.getElementById('answer').innerHTML =
	'There were ' + pRoll + ' randomization rounds until we got the same pips.';
