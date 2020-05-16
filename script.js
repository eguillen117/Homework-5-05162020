//getting the localStorage key values=================
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

	//moment.js code should get current date....
	$('#currentDay').text(moment().format('dddd, MMMM Do YYYY'));

	//userText created for user content.
	let userText = $('#userContent');

	//creating for each object(entry) of the array calendarData appending the rows and th,td, buttons
	calendarData.forEach((entry) => {
		//current hour
		var currentHour = moment().hour();

		var styleClass = '';

		// Develop the functionality to handle the color in each timeblock
		if (currentHour === entry.id) {
			styleClass = 'present';
		} else if (currentHour < entry.id) {
			styleClass = 'future';
		} else if (currentHour > entry.id) {
			styleClass = 'past';
		}

		tbody.append(`
        <tr class="rowClass"">
			<th style="background-color: whitesmoke; border-right: 3px solid teal; vertical-align: middle;">
			 ${entry.hour}
			</th>
        	<td class="pl-0 ${styleClass}" style="width: 780px;padding-top: 0px;padding-bottom: 0px;padding-right: 0px;">
				<textarea id="${entry.id}" style="width: 100%; padding-top: 0px;padding-bottom: 0px; padding-left: 0px; padding-right: 0px; height: 80px; border-left: 0px;" class="textareaClass description">${entry.event}</textarea>
			</td>
			<td class="pt-0 pb-0 pl-0">
				<button data-ref="${entry.id}" class="saveBtn btn btn-lg bg-info text-white btn-outline-info waves-effect" style= "height: 80px; width: 100px;"><i class="fas fa-thumbtack" aria-hidden="true"></i></button>
			</td>
		</tr>`);
	});

	// save button event
	$('.saveButton').on('click', saveEvent);

	/**
	 * save event target the specific id from the button
	 * and using this id to get the textarea associatte with it
	 */
	function saveEvent() {
		textareaId = $(this).attr('data-ref');
		var valueAttr = $('#' + textareaId).val();

		calendarData.forEach((timeblok) => {
			if (timeblok.id == textareaId) {
				timeblok.event = valueAttr;
			}
		});

		//save the set value(s) to the localStorage using JSON.stringify("object...")
		localStorage.setItem('calendarData', JSON.stringify(calendarData));
	}
});
