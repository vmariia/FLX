let days, hours, minutes;
function formatTime(a) {
	days = Math.floor(a / 1440);
	hours = Math.floor((a % 1440) / 60);
	minutes = (a % 1440) % 60;
	return days + ' day(s) ' + hours + ' hour(s) ' + minutes + ' minute(s)';
}
formatTime(120); 
formatTime(59);
formatTime(3601); 