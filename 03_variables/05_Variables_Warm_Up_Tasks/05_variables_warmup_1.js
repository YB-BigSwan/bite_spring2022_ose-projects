// 05_variables_warmup_1 JavasScript code
function showEmail() {
	var givenName = document.getElementById('txtGivenName').value;

	var surname = document.getElementById('txtSurname').value;

	var email = givenName + '.' + surname + '@myy.haaga-helia.fi';

	document.getElementById('pOutput').innerHTML = email;
}
