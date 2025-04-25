import { handleInnerSidebarButtons } from "./sidebar.js";

let currentDate = dayjs();

handleInnerSidebarButtons();
renderCalender(currentDate);
handleCalenderButtons();
handleCalenderDayHover();

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
                    <div class="schedule-overlay js-schedule-overlay"></div>
                </div>`;
    }
    calenderContainer.innerHTML = html;
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
            window.location.href = "calenderDay.html";
        });
    });
}
