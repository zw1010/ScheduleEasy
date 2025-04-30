import { handleInnerSidebarButtons } from "./sidebar.js";
import { renderCalender } from "./calender.js";
import { currentDate } from "./calender.js";

handleInnerSidebarButtons();
renderCalender(currentDate);
handleCalenderButtons();

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