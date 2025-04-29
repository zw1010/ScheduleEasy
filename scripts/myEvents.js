import { handleInnerSidebarButtons } from "./sidebar.js";

handleInnerSidebarButtons();
renderMyEvents();

function handleEventDetailHover() {
    const eventDetails = document.querySelectorAll('.js-my-events-overlay');
    eventDetails.forEach((eventDetail) => {
        eventDetail.addEventListener('mouseover', () => {
            eventDetail.style.opacity = "1";
    
        });
        eventDetail.addEventListener('mouseout', () => {
            eventDetail.style.opacity = "0";
        });

        eventDetail.addEventListener('click', () => {
            window.location.href = "myEventTemplate.html";
        });
    });
}

function handleEditButton() {
    const editBtn = document.querySelector('.js-my-events-edit-button');
    editBtn.addEventListener('click', () => {
        if (editBtn.innerHTML === "Edit") {
            const deleteBtns = document.querySelectorAll('.js-my-events-delete-button');
            deleteBtns.forEach((deleteBtn) => {
                deleteBtn.style.display = "block";
                editBtn.innerHTML = "Done";
            });
        }
        else if (editBtn.innerHTML === "Done") {
            const deleteBtns = document.querySelectorAll('.js-my-events-delete-button');
            deleteBtns.forEach((deleteBtn) => {
                deleteBtn.style.display = "none";
                editBtn.innerHTML = "Edit";
            });
        }
    });
}

function renderMyEvents() {
    const gridContainer = document.querySelector('.js-my-events-grid-container');
    let html = "";

    for (let i = 0; i < 8; i++) {
        html += `
            <div class="my-events-grid-item">
                <div class="my-events-grid-item-main">
                    <div class="my-events-grid-item-top">
                        <p class="my-events-grid-item-header font-small"><b>Dinner at Boon Lay</b></p>
                        <p class="my-events-grid-item-sub-header font-small">Group 1</p>
                    </div>
                    <div class="my-events-grid-item-bottom">
                        <div class="my-events-date-container">
                            <img src="images/calender-icon.png" alt="">
                            <p class="font-small">1 April 2025</p>
                        </div>
                        <div class="my-events-time-container">
                            <img src="images/clock-icon.png" alt="">
                            <p class="font-small">12PM - 2PM</p>
                        </div>
                        <div class="my-events-location-container">
                            <img src="images/location-icon.png" alt="">
                            <p class="font-small">Boon Lay Food Village</p>
                        </div>
                    </div>
                    <div class="my-events-overlay js-my-events-overlay"></div>
                </div>
                <button class="my-events-delete-button button-red font-small js-my-events-delete-button">Delete</button>
            </div> 
            `;
    }

    gridContainer.innerHTML = html;

    handleEventDetailHover();
    handleEditButton();
}

