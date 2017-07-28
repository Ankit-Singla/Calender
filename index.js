var rows = document.getElementsByTagName('tr');
var date = new Date();
var info = date.toString().split(' ');

rows[1].children[7+ (date.getDay() - date.getDate()%7 +1)].innerHTML = info[0];

function fillDates(dayNumber, numDays){
	var r = 2;
	var d = dayNumber;
	for(var i = 1; i <= numDays; i++){

		rows[r].children[d].innerHTML = i.toString();


		d++;
		d = d%7;
		if(d === 0){
			r++;
		}
	}
}

fillDates((7+ (date.getDay() - date.getDate()%7 +1)), 31);

// update these
var prev_month = document.getElementById('prevMonth');
var next_month = document.getElementById('nextMonth');

var prev_year = document.getElementById('prevYear');
var next_year = document.getElementById('nextYear');

// next_month.addEventListener('click', bringNextMonth.bind(null, date.getMonth()));
// prev_month.addEventListener('click', bringPrevMonth.bind(null, date.getMonth()));
next_year.addEventListener('click', bringNextYear.bind(null, date.getYear()));
prev_year.addEventListener('click', bringPrevYear.bind(null, date.getYear()));

function emptyCalender(){
	var r = 2;
	var d = 0;
	for(var i = 1; i <= 42; i++){

		rows[r].children[d].innerHTML = "";


		d++;
		d = d%7;
		if(d === 0){
			r++;
		}
	}
}

function bringNextMonth(monthNumber){
	emptyCalender();
	if(monthNumber == 12){
		fillDates(2, daysInMonth((date.getMonth()+1), (date.getYear()+1)));
	}else{
		fillDates(2, daysInMonth((date.getMonth()+1), date.getYear()));
	}
}

function bringNextYear(yearNumber){
	emptyCalender();
	fillDates(2, daysInMonth(date.getMonth(), (date.getYear()+1)));
}

function bringPrevYear(yearNumber){
	emptyCalender();
	fillDates(2, daysInMonth(date.getMonth(), (date.getYear()-1)));
}

function daysInMonth(month,year) {
    return new Date(year, month+1, 0).getDate();
}

function isLeapYear(year){
	if (year%4 == 0) {
		return true;
	}else if (year%100 == 0) {
		return false;
	}else if (year%4 == 0){
		return true;
	}
}