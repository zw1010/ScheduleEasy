import { handleInnerSidebarButtons } from "./sidebar.js";
import { renderCalender, handleCalenderButtons} from "./calender.js";
import { currentDate } from "./calender.js";

handleInnerSidebarButtons();
renderPage();

function renderPage() {
    renderCalender(currentDate, "schedule");
    handleCalenderButtons("schedule");
    handleDropDown();
}

function handleDropDown() {
    const dropdownContainer = document.querySelector('.schedule-group-select');
    dropdownContainer.innerHTML = `
                                <select class="font-small" id="schedule-dropdown">
                                    <option>Group 1</option>
                                    <option>Group 2</option>
                                    <option>Group 3</option>
                                </select>
                                    `;
    
    dropdownContainer.addEventListener('change', () => {
        // Update calender day events
    });
}

function renderCalenderDayDynamic() {
    // If existing event
    const existingHtml = `
                        <div class="schedule-calender-day-event-slot schedule-calender-day-event">
                            <p class="font-small">Dinner at Boon Lay</p>
                        </div>
                        `;

    // If possible event
    const possibleHtml = `
                        <div class="schedule-calender-day-event-slot schedule-calender-day-possible-event">
                            <img src="images/profile.jpg" alt="">
                            <img src="images/profile.jpg" alt="">
                            <img src="images/profile.jpg" alt="">
                            <img src="images/profile.jpg" alt="">
                            <img src="images/profile.jpg" alt="">
                            <img src="images/profile.jpg" alt="">
                            <img src="images/profile.jpg" alt="">
                            <img src="images/profile.jpg" alt="">
                            <img src="images/profile.jpg" alt="">
                            <img src="images/profile.jpg" alt="">
                            <img src="images/profile.jpg" alt="">
                            <img src="images/profile.jpg" alt="">
                            <img src="images/profile.jpg" alt="">
                            <img src="images/profile.jpg" alt="">
                            <img src="images/profile.jpg" alt="">
                            <img src="images/profile.jpg" alt="">
                            <!-- <p class="font-small">+...</p> -->
                        </div>
                        `;
}