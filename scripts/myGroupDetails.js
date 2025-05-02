import { handleInnerSidebarButtons } from "./sidebar.js";
import { handleCalenderButtons, renderCalender } from "./calender.js";
import { currentDate} from "./calender.js";

handleInnerSidebarButtons();
renderMembers();
renderCalender(currentDate, "free");
handleCalenderButtons("free");

function renderMembers() {
    const gridContainer = document.querySelector('.my-group-details-member-grid-container');
    let html = "";

    html += `
            <!-- Header -->
            <p class="my-group-details-member-grid-item-left-padding font-small"><b>Name</b></p>
            <p class="my-group-details-member-grid-item-middle-padding my-group-details-header-status font-small"><b>Status</b></p>
            <p class="my-group-details-member-grid-item-right-padding font-small"><b>Action</b></p>
            `;

    for (let i = 0; i < 10; i++) {
        html += `
                <!-- Grid Row -->
                <div class="my-group-details-member-grid-item-profile-container my-group-details-member-grid-item my-group-details-member-grid-item-left-padding">
                    <img class="my-group-details-member-item-img" src="images/profile.jpg" alt="">
                    <p class="font-small">John</p> 
                </div>
                <div class="my-group-details-member-grid-item my-group-details-member-grid-item-middle-padding ">
                    <p class="my-group-details-member-item-status font-small">Pending</p>
                </div>
                <div class="my-group-details-member-grid-item my-group-details-member-grid-item-right-padding ">
                    <button class="my-group-details-member-item-button button-red font-small">Cancel</button>    
                </div>
                `;
    }

    gridContainer.innerHTML = html;
}