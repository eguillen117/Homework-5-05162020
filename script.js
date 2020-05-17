var calendarData = time - block;

//getting the localStorage key values=================
if (localStorage.getItem('calendarData') !== null) {
	calendarData = JSON.parse(localStorage.getItem('calendarData'));
}

// // Console.logs to test =============================================
// console.log('Function is ready');
// console.log(moment().format('dddd') + moment().format('MMM Do'));
// console.log(moment().calendar());
// console.log(moment().format());
// // ===================================================================
// // Testing to see if the moment is console logging correctly
// const m = moment();
// console.log(m.toString());

// //this should be the empty area to allow the user to add text.
// var userInput = '';

$(document).ready(function() {
	$('#currentDay').text(moment().format('dddd, MMMM Do YYYY'));
	var tbody = $('#calendar-content');
	calendarData.forEach((entry) => {
		var currentHour = moment().hour();
		var styleClass = '';

		// //userText created for user content.
		// let userText = $('#userTextContent');

		//creating for each object(entry) of the array calendarData appending the rows and th,td, buttons
		calendarData.forEach((entry) => {
			//current hour
			var currentHour = moment().hour();
			var styleClass = '';

			// CSS styles to change the color depending on the current time
			if (currentHour === entry.id) {
				styleClass = 'present';
			} else if (currentHour < entry.id) {
				styleClass = 'future';
			} else if (currentHour > entry.id) {
				styleClass = 'past';
			}
		});
	});

	// save button event ===================================================
	$('.button').on('click', saveEvent);
	//=====
	function saveEvent() {
		textareaId = $(this).attr('data-ref');
		var valueAttr = $('#' + textareaId).val();

		calendarData.forEach((timeblok) => {
			if (timeblok.id == textareaId) {
				timeblok.event = valueAttr;
			}
		});

		//Local Storage to save the text the user enters
		localStorage.setItem('calendarData', JSON.stringify(calendarData));
	}
});
