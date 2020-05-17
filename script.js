// $(save1).on('click', function(event) {
// 	text1 = $('#textArea').val();
// 	console.log("userInput is '" + text + "'");

// 	// Setting variables for the value of saveButton2
// 	save1 = $('#saveButton1');
// 	if (text1 !== '') {
// 		alert('storing entry...');
// 		localStorage.setItem('8:00 am', text1);
// 	} else {
// 		alert("entries can't be blank!");
// 	}
// });

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
		// CSS styles to change the color depending on the current time
		if (currentHour === entry.id) {
			styleClass = 'present';
		} else if (currentHour < entry.id) {
			styleClass = 'future';
		} else if (currentHour > entry.id) {
			styleClass = 'past';
		}
	});

	// save button event ===================================================
	$('.saveBtn').on('click', saveEvent);
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
