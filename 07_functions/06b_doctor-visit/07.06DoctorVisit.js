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
	let feeAfter = fee - kelaReimbursement;
	let officeFee = 15.9;

	total = fee - kelaReimbursement + officeFee;

	document.getElementById('answer').innerHTML =
		"Doctor's Fee is " +
		fee.toFixed(2) +
		' euros.<br>' +
		'Kela reimbursement is ' +
		kelaReimbursement.toFixed(2) +
		' euros.<br>' +
		'Office Fee is ' +
		officeFee.toFixed(2) +
		' euros.<br>' +
		'Customer needs to pay ' +
		total.toFixed(2) +
		' euros.';
}
