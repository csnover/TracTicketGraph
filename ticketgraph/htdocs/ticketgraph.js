$(document).ready(function() {
	var graph = $('#placeholder').width(640).height(400),
	barSettings = { show: true, barWidth: 86400000 };
	$.plot($('#placeholder'),
	[
		{
			data: closedTickets,
			label: 'Closed',
			bars: barSettings,
			color: 1
		},
		{
			data: openedTickets,
			label: 'New',
			bars: barSettings,
			color: 2,
			stack: true
		},
		{
			data: reopenedTickets,
			label: 'Reopened',
			bars: barSettings,
			color: 3,
			stack: true
		},
		{
			data: openTickets,
			label: 'Open',
			yaxis: 2,
			lines: { show: true },
			color: 0
		}
	],
	{
		xaxis: { mode: 'time', minTickSize: [1, "day"] },
		yaxis: { min: 0, label: 'Tickets' },
		y2axis: { min: 0 },
		legend: { position: 'nw' }
	});
});
