var fName = [];
var age = [];
var memberCount = 0;
// n and g used as a sorting variable
var largest = 0;
var smallest = 150;

// member count
if (memberCount == 0) {
	document.getElementById('memberCount').innerHTML = ' 0 Members';
} else {
	document.getElementById('memberCount').innerHTML = memberCount + ' Members';
}

// adds member
function addPerson() {
	// adds name
	txtName = document.getElementById('txtName').value;
	fName.push(txtName);

	// adds age
	txtAge = Number(document.getElementById('txtAge').value);
	age.push(txtAge);

	// clears form
	document.getElementById('txtName').value = '';
	document.getElementById('txtAge').value = '';

	memberCount++;

	document.getElementById('memberCount').innerHTML = memberCount + ' Members';
}

// shows people under 18
function showMinors() {
	document.getElementById('output').innerHTML = '';
	for (i = 0; i < fName.length; i++) {
		if (age[i] <= 17) {
			document.getElementById('output').innerHTML +=
				fName[i] + ', ' + age[i] + ' years<br>';
		}
	}
}

// shows people 18+
function showAdults() {
	document.getElementById('output').innerHTML = '';
	for (i = 0; i < fName.length; i++) {
		if (age[i] > 17) {
			document.getElementById('output').innerHTML +=
				fName[i] + ', ' + age[i] + ' years<br>';
		}
	}
}

// shows oldest member
function showOld() {
	document.getElementById('output').innerHTML = '';
	for (i = 0; i < age.length; i++) {
		if (age[i] > largest) {
			largest = age[i];
		}
	}
	for (i = 0; i < age.length; i++) {
		if (age[i] == largest) {
			document.getElementById('output').innerHTML +=
				fName[i] + ', ' + age[i] + ' years<br>';
		}
	}
}

// shows youngest member
function showYoung() {
	document.getElementById('output').innerHTML = '';
	for (i = 0; i < age.length; i++) {
		if (age[i] < smallest) {
			smallest = age[i];
		}
	}
	for (i = 0; i < age.length; i++) {
		if (age[i] == smallest) {
			document.getElementById('output').innerHTML +=
				fName[i] + ', ' + age[i] + ' years<br>';
		}
	}
}
