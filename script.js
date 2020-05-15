// /* /*  */do I need a separate javascript or should I embed into the index?// */
//< !--End of Script Sources JQUERY and Moment.js ================================================
// Start of Function ===================================

$(document).ready(function() {
	console.log('Function is ready');

	console.log(moment().format('dddd') + moment().format('MMM Do'));
	console.log(moment().calendar());
	console.log(moment().format());

	// Testing to see if the moment is console logging correctly
	const m = moment();
	console.log(m.toString());

	//Creating variables/let statements
	// let calendarData = [
	// 	{
	// 		hour: '8AM',
	// 		event: textareaInput,
	// 		id: '1'
	// 	},
	// 	{
	// 		hour: '9AM',
	// 		event: textareaInput,
	// 		id: '2'
	// 	},
	// 	{
	// 		hour: '10AM',
	// 		event: textareaInput,
	// 		id: '3'
	// 	}
	// ];

	//this should be the empty area to allow the user to add text.
	var userInput = '';
	// start of function... should this be in a sep file or embedded all in index.html?
	//moment.js code should get current date....
	$('#currentDay').text(moment().format('dddd, MMMM Do YYYY'));

	//userText created for user content.
	let userText = $('#userContent');
});
