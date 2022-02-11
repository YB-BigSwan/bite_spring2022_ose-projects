function comparePackages() {
	var txt = Number(document.getElementById('textMessages').value);
	var call = Number(document.getElementById('callTime').value);

	var aipkg = 29.9;
	var spkg = 19.9 + txt * 0.069 + call * 0.069;

	var spkgless =
		'The Special package ' +
		'(' +
		spkg.toFixed(2) +
		')' +
		' is cheaper than the All-inclusive package (29.90)';
	var aipkgless =
		'The All-inclusive package (29.90) is cheaper than the Special package' +
		'(' +
		spkg.toFixed(2) +
		')';

	if (spkg < aipkg) {
		document.getElementById('answer').innerHTML = spkgless;
	} else {
		document.getElementById('answer').innerHTML = aipkgless;
	}
}
