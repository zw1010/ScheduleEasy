import { handleInnerSidebarButtons } from "./sidebar.js";

handleInnerSidebarButtons();
renderHomeEvents();
handleSeeAllButton();



function renderHomeEvents() {
    renderAttendingEvents();
    renderPendingEvents();
    renderMyEvents();

    // Event hover on-click
    handleEventDetailHover();
    handleMyEventsDetailsHover();
}

function renderAttendingEvents() {
    const attendingGridContainer = document.querySelector('.js-home-grid-container');

    let html = "";

    for (let i = 0; i < 6; i++) {
        html += `
            <div class="home-grid-item">
                <div class="home-grid-item-main">
                    <div class="home-grid-item-top">
                        <p class="home-grid-item-header font-small"><b>Dinner at Boon Lay</b></p>
                        <p class="home-grid-item-sub-header font-small">Group 1</p>
                    </div>
                    <div class="home-grid-item-bottom">
                        <div class="home-date-container">
                            <img src="images/calender-icon.png" alt="">
                            <p class="font-small">1 April 2025</p>
                        </div>
                        <div class="home-time-container">
                            <img src="images/clock-icon.png" alt="">
                            <p class="font-small">12PM - 2PM</p>
                        </div>
                        <div class="home-location-container">
                            <img src="images/location-icon.png" alt="">
                            <p class="font-small">Boon Lay Food Village</p>
                        </div>
                    </div>
                    <div class="home-overlay js-home-overlay"></div>
                </div>
            </div>   
            `;
    }

    attendingGridContainer.innerHTML = html;
}

function renderPendingEvents() {
    const pendingGridContainer = document.querySelector('.js-home-pending-grid-container');
    let html = "";

    for (let i = 0; i < 6; i++) {
        html += `
            <div class="home-grid-item">
                <div class="home-grid-item-main">
                    <div class="home-grid-item-top">
                        <p class="home-grid-item-header font-small"><b>Dinner at Boon Lay</b></p>
                        <p class="home-grid-item-sub-header font-small">Group 1</p>
                    </div>
                    <div class="home-grid-item-bottom">
                        <div class="home-date-container">
                            <img src="images/calender-icon.png" alt="">
                            <p class="font-small">1 April 2025</p>
                        </div>
                        <div class="home-time-container">
                            <img src="images/clock-icon.png" alt="">
                            <p class="font-small">12PM - 2PM</p>
                        </div>
                        <div class="home-location-container">
                            <img src="images/location-icon.png" alt="">
                            <p class="font-small">Boon Lay Food Village</p>
                        </div>
                    </div>
                    <div class="home-overlay js-home-overlay"></div>
                </div>
            </div>   
            `;
    }

    pendingGridContainer.innerHTML = html;
}

function renderMyEvents() {
    const myEventsGridContainer = document.querySelector('.js-home-my-events-grid-container');
    let html = "";

    for (let i = 0; i < 6; i++) {
        html += `
            <div class="home-grid-item">
                <div class="home-grid-item-main">
                    <div class="home-grid-item-top">
                        <p class="home-grid-item-header font-small"><b>Dinner at Boon Lay</b></p>
                        <p class="home-grid-item-sub-header font-small">Group 1</p>
                    </div>
                    <div class="home-grid-item-bottom">
                        <div class="home-date-container">
                            <img src="images/calender-icon.png" alt="">
                            <p class="font-small">1 April 2025</p>
                        </div>
                        <div class="home-time-container">
                            <img src="images/clock-icon.png" alt="">
                            <p class="font-small">12PM - 2PM</p>
                        </div>
                        <div class="home-location-container">
                            <img src="images/location-icon.png" alt="">
                            <p class="font-small">Boon Lay Food Village</p>
                        </div>
                    </div>
                    <div class="home-overlay js-my-events-overlay"></div>
                </div>
            </div>   
            `;
    }

    myEventsGridContainer.innerHTML = html;
}

function handleEventDetailHover() {
    const eventDetails = document.querySelectorAll('.js-home-overlay');
    eventDetails.forEach((eventDetail) => {
        eventDetail.addEventListener('mouseover', () => {
            eventDetail.style.opacity = "1";
    
        });
        eventDetail.addEventListener('mouseout', () => {
            eventDetail.style.opacity = "0";
        });

        eventDetail.addEventListener('click', () => {
            window.location.href = "otherEventTemplate.html";
        });
    });
}


function handleMyEventsDetailsHover() {
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

function handleSeeAllButton() {
    const seeAllBtn = document.querySelector('.js-home-my-events-button');
    seeAllBtn.addEventListener('click', () => {
        window.location.href = "myEvents.html";
    });
}
