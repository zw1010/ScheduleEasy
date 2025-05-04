import "./libraries/dayjs.min.js";
import { renderAddFreeTimeUI } from "./addFreeTimeOverlay.js";

export let currentDate = dayjs();

export function renderCalender(calenderType) {
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
        const currentDayClass = currentDate.isSame(dayjs() , "month") && day === dayjs().date()
            ? "js-schedule-calender-date-container" : "";
 
        gridHtml += `
                <div class="schedule-calender-grid-item js-schedule-calender-grid-item">
                    <div class="schedule-calender-date ${currentDayClass}">
                        <p class=" font-small"><b>${day}</b></p>
                    </div>
                    <div class="schedule-overlay js-schedule-overlay" 
                        data-date="${day}"></div>
                </div>`;
    }
    calenderGridContainer.innerHTML = gridHtml;
    
    handleCalenderDayHover(calenderType);
}

export function handleCalenderButtons(calenderType) {
    const backBtn = document.querySelector('.js-schedule-left-button');
    const forwardBtn = document.querySelector('.js-schedule-right-button');
    
    backBtn.addEventListener('click', () => {
        currentDate = currentDate.subtract(1, 'month');
        renderCalender(calenderType);
    });

    forwardBtn.addEventListener('click', () => {
        currentDate = currentDate.add(1, 'month');
        renderCalender(calenderType);
    });
}

function handleCalenderDayHover(calenderType) {
    const dayList = document.querySelectorAll('.js-schedule-overlay');
    dayList.forEach((day) => {
        day.addEventListener('mouseover', () => {
            day.style.opacity = "1";
    
        });
        day.addEventListener('mouseout', () => {
            day.style.opacity = "0";
        });

        day.addEventListener('click', () => {
            currentDate = currentDate.set('date', day.dataset.date);
            renderCalenderDay(calenderType);
        });
    });
}

function renderCalenderDay(calenderType) {
    const calenderContainer = document.querySelector('.js-schedule-calender-container');

    calenderContainer.innerHTML = `
                               <div class="schedule-calender-day-container">
                                    <div class="schedule-calender-day-header-container">
                                        <p class="schedule-calender-day font-med js-schedule-calender-day"><b>${currentDate.date()}</b> | ${currentDate.format('dddd')}</p>
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
            renderCalender(calenderType);
        });

    //// Generate Timestamps and Empty slots
    const timeGrid = document.querySelector('.js-schedule-calender-time-grid');
    const eventGrid = document.querySelector('.js-schedule-calender-event-grid');
    let html = "";
    let eventtHtml = "";

    let sampleDate = dayjs('2018-04-13 00:00');
    
    while (sampleDate.date() === 13) {
        // Generate Timestamps
        html += `
                <p class="schedule-calender-time font-small">${sampleDate.format("h:mm A")}</p>
                `;
    
        // Generate event Slots
        if (sampleDate.hour() === 0 && sampleDate.minute() === 0) {
            eventtHtml += `
            <div class="schedule-calender-day-event-first-slot 
                js-schedule-calender-day-event-slot-${sampleDate.format("HH-mm")}" data-time="${sampleDate.format("HH:mm")}"></div>
            `;
        }
        else {
            eventtHtml += `
            <div class="schedule-calender-day-event-slot 
                js-schedule-calender-day-event-slot-${sampleDate.format("HH-mm")}" data-time="${sampleDate.format("HH:mm")}"></div>
            `;
        }

        // Increment 5 mins
        sampleDate = sampleDate.add(5, 'minutes');
    }
    // Last event - Next day 12 AM
    html += `
            <p class="schedule-calender-time font-small">12:00 AM</p>
            `;

    timeGrid.innerHTML = html;
    eventGrid.innerHTML = eventtHtml;

    // Functions based on calender type
    if (calenderType === "free") {
        handleAddFreeTimeOnClick();
    }
    else if (calenderType === "schedule") {

    }
}

function handleAddFreeTimeOnClick() {
    const daySlots = document.querySelectorAll('.schedule-calender-day-event-slot');
        daySlots.forEach(slot => {
            slot.addEventListener('click', () => {{
                currentDate = dayjs(`${currentDate.format("YYYY-MM-DD")} ${slot.dataset.time}`)
                renderAddFreeTimeUI(currentDate);
            }})
        });
    document.querySelector('.schedule-calender-day-event-first-slot')
        .addEventListener('click', () => {{
            currentDate = dayjs(`${currentDate.format("YYYY-MM-DD")} 00:00`)
            renderAddFreeTimeUI(currentDate);
        }});
}