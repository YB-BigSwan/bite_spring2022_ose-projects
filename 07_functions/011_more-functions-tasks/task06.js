function getGreetingWithAge(name, yob) {
	let sName = document.createElement('txt');
	sName.src = name;

	let giveYob = document.createElement('txt');
	giveYob.src = yob;

	let date = new Date();
	let cYear = date.getFullYear();

	let age = cYear - yob;

	let rGreeting =
		'Hello ' + name + '! You are ' + age + ' years old this year.';

	return rGreeting;
}

function displayGreetingWithAge() {
	let greeting1 = getGreetingWithAge('Mike', 1989);
	let greeting2 = getGreetingWithAge('Anne', 2002);
	let greeting3 = getGreetingWithAge('Joe', 2010);
	console.log(greeting1);
	console.log(greeting2);
	console.log(greeting3);
}

displayGreetingWithAge();
