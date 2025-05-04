import { handleInnerSidebarButtons } from "./sidebar.js";
import { renderCalender, handleCalenderButtons} from "./calender.js";

handleInnerSidebarButtons();
renderMembers();
renderCalender("free");
handleCalenderButtons("free");

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