var wNumber = [];

for (i = 0; i < 7; i++) {
	rNumber = Math.floor(Math.random() * 40) + 1;

	if (!wNumber.includes(rNumber)) {
		wNumber.push(rNumber);
	} else {
		rNumber = Math.floor(Math.random() * 40) + 1;
		if (!wNumber.includes(rNumber)) {
			wNumber.push(rNumber);
		} else {
			rNumber = Math.floor(Math.random() * 40) + 1;
			if (!wNumber.includes(rNumber)) {
				wNumber.push(rNumber);
			} else {
				rNumber = Math.floor(Math.random() * 40) + 1;
				if (!wNumber.includes(rNumber)) {
					wNumber.push(rNumber);
				}
			}
		}
	}
}

wNumber.sort(function (a, b) {
	return a - b;
});

console.log(wNumber);
document.getElementById('output').innerHTML = wNumber.join(' ');
