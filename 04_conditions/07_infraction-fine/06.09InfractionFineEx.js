function tellInfractionFine() {
	var dSpeed = Number(document.getElementById('drivingSpeed').value);
	var speedL = Number(document.getElementById('speedLimit').value);
	var xsSpeed = dSpeed - speedL;
	var a;

	if (dSpeed <= speedL) {
		var a = 'No speeding, no fine.';
	} else if (speedL <= 60 && xsSpeed <= 15) {
		var a = 'Infraction fine is 85 euros.';
	} else if (speedL <= 60 && xsSpeed > 15 && xsSpeed <= 20) {
		var a = 'Infraction fine is 115 euros.';
	} else if (speedL >= 70 && speedL <= 120 && xsSpeed <= 15) {
		var a = 'Infraction fine is 70 euros.';
	} else if (speedL >= 70 && speedL <= 120 && xsSpeed > 15 && xsSpeed <= 20) {
		var a = 'Infraction fine is 100 euros.';
	} else if (xsSpeed > 20) {
		var a = 'Income-based unit fine.';
	}

	document.getElementById('answer').innerHTML = a;
}
