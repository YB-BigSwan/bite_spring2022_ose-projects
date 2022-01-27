var earth;

function initialize() {
	var options = {
		atmosphere: true,
		center: [0, 0],
		zoom: 0,
	};
	earth = new WE.map('earth_div', options);

	WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '© OpenStreetMap contributors',
	}).addTo(earth);
}

function goHome() {
	earth.setView([60.15736560948065, 24.91959208377657]);
	earth.setZoom(15);
}

function showCoords() {
	alert(earth.getCenter());
}
