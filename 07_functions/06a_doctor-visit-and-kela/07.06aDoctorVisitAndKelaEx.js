function calculateReimbursement(length) {
	let kela;

	if (length > 45) {
		kela = 21;
	} else if (length > 30 && length <= 45) {
		kela = 16.5;
	} else if (length > 20 && length <= 30) {
		kela = 13.5;
	} else if (length > 10 && length <= 20) {
		kela = 11;
	} else if (length <= 10) {
		kela = 8;
	}

	return kela;
}

function calculate() {
	let length = Number(document.getElementById('length').value);
	let fee = Number(document.getElementById('doctorsFee').value);

	let kelaReimbursement = calculateReimbursement(length);

	document.getElementById('answer').innerHTML =
		'Length of visit is ' +
		length.toFixed(0) +
		' minutes.<br>' +
		'Kela reimbursement is ' +
		kelaReimbursement.toFixed(2) +
		' euros.';
}
