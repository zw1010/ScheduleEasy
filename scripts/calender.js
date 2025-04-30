import "./libraries/dayjs.min.js";

export let currentDate = dayjs();

renderCalender(currentDate);
handleCalenderButtons();

export function renderCalender(currentDate) {
    const calenderContainer = document.querySelector('.js-schedule-calender-container');
    const monthPara = document.querySelector('.js-schedule-calender-date');

    // Set calender month to today's month
    monthPara.innerHTML = currentDate.format('MMM YYYY');

    // Calender days header
    calenderContainer.innerHTML = `
                                <div class="schedule-calender-header-grid-container">
                                    <p class="font-small js-schedule-calender-header-day"><b>Sun</b></p>
                                    <p class="font-small js-schedule-calender-header-day"><b>Mon</b></p>
                                    <p class="font-small js-schedule-calender-header-day"><b>Tue</b></p>
                                    <p class="font-small js-schedule-calender-header-day"><b>Wed</b></p>
                                    <p class="font-small js-schedule-calender-header-day"><b>Thu</b></p>
                                    <p class="font-small js-schedule-calender-header-day"><b>Fri</b></p>
                                    <p class="font-small js-schedule-calender-header-day"><b>Sat</b></p>
                                </div>
                                <div class="schedule-calender-grid-container js-schedule-calender-grid-container">
                                </div>
                                `;
    const calenderGridContainer = document.querySelector('.js-schedule-calender-grid-container');

    //// Generate days of month (Grid items)
    // Create blank grid items
    let gridHtml = "";
    const firstDay = currentDate.set('date', 1).format("ddd");
    const headerDayList = document.querySelectorAll('.js-schedule-calender-header-day');
    let flag = false;
    headerDayList.forEach(dayElement => {
        if (firstDay === dayElement.innerText) {
            flag = true;
        }
        if (firstDay !== dayElement.innerText && flag===false) {
            gridHtml += `
                    <div></div>
                    `;
        }
    });

    // Create grid items
    for (let day = 1; day <= currentDate.daysInMonth(); day++) {
        const currentDayClass = currentDate.isSame(dayjs() , "day") && day === currentDate.date()
            ? "js-schedule-calender-date-container" : "";
 
        gridHtml += `
                <div class="schedule-calender-grid-item js-schedule-calender-grid-item">
                    <div class="schedule-calender-date ${currentDayClass}">
                        <p class=" font-small"><b>${day}</b></p>
                    </div>
                    <div class="schedule-overlay js-schedule-overlay" 
                        data-date="${day}"
                        data-day="${currentDate.set('date', day).format("dddd")}"></div>
                </div>`;
    }
    calenderGridContainer.innerHTML = gridHtml;
    
    handleCalenderDayHover();
}

function handleCalenderButtons() {
    const backBtn = document.querySelector('.js-schedule-left-button');
    const forwardBtn = document.querySelector('.js-schedule-right-button');
    
    backBtn.addEventListener('click', () => {
        currentDate = currentDate.subtract(1, 'month');
        renderCalender(currentDate);

    });

    forwardBtn.addEventListener('click', () => {
        currentDate = currentDate.add(1, 'month');
        renderCalender(currentDate);
    });
}

function handleCalenderDayHover() {
    const dayList = document.querySelectorAll('.js-schedule-overlay');
    dayList.forEach((day) => {
        day.addEventListener('mouseover', () => {
            day.style.opacity = "1";
    
        });
        day.addEventListener('mouseout', () => {
            day.style.opacity = "0";
        });

        day.addEventListener('click', () => {
            renderCalenderDay(day.dataset.date, day.dataset.day);
        });
    });
}

function renderCalenderDay(date, day) {
    const calenderContainer = document.querySelector('.js-schedule-calender-container');

    calenderContainer.innerHTML = `
                               <div class="schedule-calender-day-container">
                                    <div class="schedule-calender-day-header-container">
                                        <p class="schedule-calender-day font-med js-schedule-calender-day"><b>${date}</b> | ${day}</p>
                                        <button class="schedule-calender-day-cross-button js-schedule-calender-day-cross-button">&#10005;</button>
                                    </div>
                                    <div class="schedule-calender-time-event-container">
                                        <div class="schedule-calender-time-grid js-schedule-calender-time-grid">
                                        </div>
                                        <div class="schedule-calender-event-grid js-schedule-calender-event-grid">
                                        </div>
                                    </div>
                                </div>
                                `;

    // Handle cross button onclick
    document.querySelector('.js-schedule-calender-day-cross-button')
        .addEventListener('click', () => {
            renderCalender(currentDate);
        });

    //// Generate Timestamps and Empty slots
    const timeGrid = document.querySelector('.js-schedule-calender-time-grid');
    const eventGrid = document.querySelector('.js-schedule-calender-event-grid');
    let html = "";
    let eventtHtml = "";

    eventtHtml += `
                <div class="schedule-calender-day-event-first-slot 
                    js-schedule-calender-day-event-slot-12-0-AM" data-time="12-0-AM"></div>
                `;
    
    // Generate AM
    for (let minute = 0; minute < 60; minute+=5) {
        if (minute === 0 || minute === 5)  {
            html += `
                    <p class="schedule-calender-time font-small">${12}:0${minute} AM</p>
                    `;
        }
        else {
            html += `
                    <p class="schedule-calender-time font-small">${12}:${minute} AM</p>
                    `;  
        }
        
        eventtHtml += minute !== 0 ? 
                    `
                    <div class="schedule-calender-day-event-slot 
                        js-schedule-calender-day-event-slot-12-${minute}-AM" data-time="12-${minute}-AM"></div>
                    `: "";
    }
    for (let hour = 1; hour < 12; hour++) {
        for (let minute = 0; minute < 60; minute+=5) {
            if (minute === 0 || minute === 5)  {
                html += `
                        <p class="schedule-calender-time font-small">${hour}:0${minute} AM</p>
                        `;  
            }
            else {
                html += `
                        <p class="schedule-calender-time font-small">${hour}:${minute} AM</p>
                        `;  
            }
            eventtHtml += `
                        <div class="schedule-calender-day-event-slot 
                            js-schedule-calender-day-event-slot-${hour}-${minute}-AM" data-time="${hour}-${minute}-AM"></div>
                        `;
        }
    }

    // Generate PM
    for (let minute = 0; minute < 60; minute+=5) {
        if (minute === 0 || minute === 5)  {
            html += `
                    <p class="schedule-calender-time font-small">${12}:0${minute} PM</p>
                    `;  
        }
        else {
            html += `
                    <p class="schedule-calender-time font-small">${12}:${minute} PM</p>
                    `;  
        }
        eventtHtml += `
                    <div class="schedule-calender-day-event-slot 
                        js-schedule-calender-day-event-slot-12-${minute}-PM" data-time="12-${minute}-PM"></div>
                    `;
    }
    for (let hour = 1; hour < 12; hour++) {
        for (let minute = 0; minute < 60; minute+=5) {
            if (minute === 0 || minute === 5)  {
                html += `
                        <p class="schedule-calender-time font-small">${hour}:0${minute} PM</p>
                        `;  
            }
            else {
                html += `
                        <p class="schedule-calender-time font-small">${hour}:${minute} PM</p>
                        `;  
            }
            eventtHtml += (hour !== 11 || minute !== 55) ? 
                        `
                        <div class="schedule-calender-day-event-slot 
                            js-schedule-calender-day-event-slot-${hour}-${minute}-PM" data-time="${hour}-${minute}-PM"></div>
                        `: "";
        }
    }

    timeGrid.innerHTML = html;
    eventGrid.innerHTML = eventtHtml;
}