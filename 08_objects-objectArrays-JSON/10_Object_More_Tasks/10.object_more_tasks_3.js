var Course = function (courseName, courseCode) {
	this.cName = courseName;
	this.cCode = courseCode;
};

function addCourse() {
	var courseCode = document.getElementById('txtCourseCode').value;
	var courseName = document.getElementById('txtCourseName').value;

	if (courseCode === '' || courseName === '') {
		return;
	}

	courseArray.push(
		new Course('Orientation to Software Engineering', 'swd1tf001')
	);

	courseArray.push(new Course('Java Programming', 'swd4tf002'));

	courseArray.push(new Course('Data Management and Databases', 'swd4tf003'));

	document.getElementById('txtCourseCode').value = '';
	document.getElementById('txtCourseName').value = '';
	document.getElementById('txtCourseCode').focus();
	document.getElementById('pOutput').innerHTML = '';
}

function listCourses() {
	var outputText = '';

	for (i = 0; i < courseArray.length; i++) {
		outputText += courseArray[i].cName + ' (' + courseArray[i].cCode + ') <br>';
	}

	document.getElementById('pOutput').innerHTML = outputText;
}

function sortCourseArray() {
	function compareTwoCourses(a, b) {
		if (a.name.toUpperCase() > b.name.toUpperCase()) {
			return 1;
		} else {
			return -1;
		}
	}

	courseArray.sort(compareTwoCourses);
}

// This array is created when the page is loaded
var courseArray = [];

// End
