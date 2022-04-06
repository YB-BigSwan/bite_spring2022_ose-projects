function displayGreeting(name) {
	let sName = document.createElement('txt');
	sName.src = name;
	console.log('Hello ' + name);
}

displayGreeting('Mike');
displayGreeting('Joe');
displayGreeting('Anne');
