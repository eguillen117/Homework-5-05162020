$(document).ready(function() {
	console.log('Test');
	//Current Day moment.js format
	$('#currentDay').text(moment().format('dddd, MMMM Do YYYY'));
	var tbody = $('#calendar-content');
	//creating for each object(entry) of the array calendarData appending the rows and th,td, buttons
	calendarData.forEach((entry) => {
		tbody.append(`
        <tr style="background-color: lightgray;">
         <th style="background-color: whitesmoke; border-right: 3px solid teal; vertical-align: middle;">${entry.hour}</th>
          <td class="pl-0" style="width: 780px;padding-top: 0px;padding-bottom: 0px;padding-right: 0px;">
          <textarea  style="width: 100%; padding-top: 0px;padding-bottom: 0px; padding-left: 0px; padding-right: 0px; height: 80px; border-left: 0px;" value="${entry.event}" dataId= "${entry.id}" class="textareaClass"/></td>
            <td class="pt-0 pb-0"><button data-hour="${entry.hour}" data-textareaId ="${entry.id}" class="save_btn btn btn-lg bg-info text-white btn-outline-info waves-effect" style= "height: 80px; width: 100px;"><i class="fas fa-thumbtack" aria-hidden="true"></i></button></td>
        </tr>`);
	});
});
