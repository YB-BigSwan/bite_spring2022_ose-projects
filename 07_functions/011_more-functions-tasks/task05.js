function displayGreetingWithAge(name, yob) {
	let sName = document.createElement('txt');
	sName.src = name;

	let giveYob = document.createElement('txt');
	giveYob.src = yob;

	let date = new Date();
	let cYear = date.getFullYear();

	let age = cYear - yob;

	console.log('Hello ' + name + '! You are ' + age + ' years old this year.');
}

displayGreetingWithAge('Mike', 1989);
displayGreetingWithAge('Anne', 2002);
displayGreetingWithAge('Joe', 2010);
