import { handleInnerSidebarButtons } from "./sidebar.js";

let currentDate = dayjs();

handleInnerSidebarButtons();
renderCalender(currentDate);
handleCalenderButtons();

function renderCalender(currentDate) {
    const monthPara = document.querySelector('.js-schedule-calender-date');
    const calenderContainer = document.querySelector('.js-schedule-calender-grid-container');

    // Set calender month to today's month
    monthPara.innerHTML = currentDate.format('MMM YYYY');

    // Generate days of month (Grid items)
    let html = "";
    for (let day = 1; day <= currentDate.daysInMonth(); day++) {
        const currentDayClass = currentDate.isSame(dayjs() , "day") && day === currentDate.date()
            ? "js-schedule-calender-date-container" : "";
 
        html += `
                <div class="schedule-calender-grid-item js-schedule-calender-grid-item">
                    <div class="schedule-calender-date ${currentDayClass}">
                        <p class=" font-small"><b>${day}</b></p>
                    </div>
                    <div class="schedule-overlay js-schedule-overlay" 
                        data-date="${day}"
                        data-day="${dayjs().set('date', day).format("dddd")}"></div>
                </div>`;
    }
    calenderContainer.innerHTML = html;
    
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
    const eventDetails = document.querySelectorAll('.js-schedule-overlay');
    eventDetails.forEach((eventDetail) => {
        eventDetail.addEventListener('mouseover', () => {
            eventDetail.style.opacity = "1";
    
        });
        eventDetail.addEventListener('mouseout', () => {
            eventDetail.style.opacity = "0";
        });

        eventDetail.addEventListener('click', () => {
            renderCalenderDay(eventDetail.dataset.date, eventDetail.dataset.day);
        });
    });
}

function renderCalenderDay(date, day) {
    ////Generate Day
    const dayContainer = document.querySelector('.js-schedule-calender-day');
    dayContainer.innerHTML = `
                            <b>${date}</b> | ${day}
                            `;
    
    //// Generate time
    const timeGrid = document.querySelector('.js-schedule-calender-time-grid');
    const eventGrid = document.querySelector('.js-schedule-calender-event-grid');
    let html = "";
    let eventtHtml = "";

    eventtHtml += `
                <div class="schedule-calender-day-event-first-slot"></div>
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
                    <div class="schedule-calender-day-event-slot" data-time="12-${minute}-AM"></div>
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
                        <div class="schedule-calender-day-event-slot" data-time="${hour}-${minute}-AM"></div>
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
                    <div class="schedule-calender-day-event-slot" data-time="12-${minute}-PM"></div>
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
                        <div class="schedule-calender-day-event-slot" data-time="${hour}-${minute}-PM"></div>
                        `: "";
        }
    }

    timeGrid.innerHTML = html;
    eventGrid.innerHTML = eventtHtml;
}