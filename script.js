// /* /*  */do I need a separate javascript or should I embed into the index?// */
//< !--End of Script Sources JQUERY and Moment.js ================================================
// Start of Function ===================================

//getting the localStorage key values
if (localStorage.getItem('calendarData') !== null) {
	calendarData = JSON.parse(localStorage.getItem('calendarData'));
}

$(document).ready(function() {
	console.log('Function is ready');

	console.log(moment().format('dddd') + moment().format('MMM Do'));
	console.log(moment().calendar());
	console.log(moment().format());

	// Testing to see if the moment is console logging correctly
	const m = moment();
	console.log(m.toString());

	//this should be the empty area to allow the user to add text.
	var userInput = '';
	// start of function... should this be in a sep file or embedded all in index.html?
	//moment.js code should get current date....
	$('#currentDay').text(moment().format('dddd, MMMM Do YYYY'));

	//userText created for user content.
	let userText = $('#userContent');
});
