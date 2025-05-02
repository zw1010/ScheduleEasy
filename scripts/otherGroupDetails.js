import { handleInnerSidebarButtons } from "./sidebar.js";
import { renderCalender } from "./calender.js";
import { currentDate } from "./calender.js";

handleInnerSidebarButtons();
renderMembers();
renderCalender(currentDate);

function renderMembers() {
    const gridContainer = document.querySelector('.other-group-details-member-grid-container');
    let html = "";

    for (let i = 0; i < 20; i++) {
        html += `
                <div class="other-group-details-member-grid-item">
                    <img class="other-group-details-member-grid-item-img" src="images/profile.jpg" alt="">
                    <p class="font-small">Peter</p>
                </div>
                `;
    }

    gridContainer.innerHTML = html;
    
}