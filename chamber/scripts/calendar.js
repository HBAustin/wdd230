function generateCalendar() {
    const calendarContainer = document.getElementById('calendar');
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const today = currentDate.getDate();
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let calendarHTML = '<div class="month">' +
        '<h3>' + monthNames[currentMonth] + ' ' + currentYear + '</h3>' +
        '</div>' +
        '<div class="days-container">' +
        '<div class="days">Sun</div>' +
        '<div class="days">Mon</div>' +
        '<div class="days">Tue</div>' +
        '<div class="days">Wed</div>' +
        '<div class="days">Thu</div>' +
        '<div class="days">Fri</div>' +
        '<div class="days">Sat</div>' +
        '</div>' +
        '<div class="dates-container" id="dates"></div>';

    calendarContainer.innerHTML = calendarHTML;

    const datesContainer = document.getElementById('dates');
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const totalDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    let dateCells = '';

    for (let i = 0; i < firstDayOfMonth; i++) {
        dateCells += '<div class="dates"></div>';
    }

    for (let day = 1; day <= totalDaysInMonth; day++) {
        dateCells += '<div class="dates">' + day + '</div>';
    }

    datesContainer.innerHTML = dateCells;

    const dates = datesContainer.getElementsByClassName('dates');
    for (let i = 0; i < dates.length; i++) {
        if (parseInt(dates[i].textContent) === today) {
            dates[i].classList.add('current-date');
            break;
        }
    }
}

window.onload = function () {
    generateCalendar();
};
