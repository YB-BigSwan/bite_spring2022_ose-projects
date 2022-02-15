function showStudyGrant() {
	var age = Number(document.getElementById('age').value);
	var wp = document.getElementById('withParents').value;
	var answer;
	if (age >= 20 && wp === 'y') {
		var answer = (document.getElementById('answer').innerHTML =
			'The study grant is 136.70 euros.');
	} else if (age >= 20) {
		var answer = (document.getElementById('answer').innerHTML =
			'The study grant is 335.20 euros.');
	} else {
		var answer = (document.getElementById('answer').innerHTML = 'Ask Kela.');
	}
}
