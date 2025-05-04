import { handleInnerSidebarButtons } from "./sidebar.js";

handleInnerSidebarButtons();
renderPage();

function renderPage() {
    const mainContainer = document.querySelector('.js-home-events-main-container');

    let html = "";

    html += `
        <div class="home-events-details-header-container">
            <div class="home-events-details-header-left">
                <p class="home-events-title font-lg">Dinner at Boon Lay</p>
                <p class="font-small">Group 1</p>
            </div>
            <button class="home-events-create-button button-green font-small">Going!</button>
        </div>

        <div class="home-events-main-container">
            <div class="home-events-main-left">
                <p class="text-header-margin font-small"><b>Description</b></p>
                <p class="font-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in. Adipiscing elit, sed do eiusmod tempor in.</p>
                <p class="home-events-loc-header text-header-margin font-small"><b>Location</b></p>
                <p class="home-events-loc-text font-small">Boon Lay Food Village</p>
                <div class="home-events-datetime-container">
                    <div class="home-events-date-container">
                        <p class="text-header-margin font-small"><b>Date</b></p>
                        <p class="font-small">12 April 2025</p>
                    </div>
                    <div class="home-events-time-container">
                        <p class="text-header-margin font-small"><b>Time</b></p>
                        <p class="font-small">12PM - 2PM</p>
                    </div>
                    <div class="home-events-duration-container">
                        <p class="text-header-margin font-small"><b>Duration</b></p>
                        <p class="font-small">2 Hours</p>
                    </div>
                </div>
            </div>
        
            <div class="home-events-main-right">
                <div class="home-events-members-container">
                    <p class="form-label-margin font-small"><b>Coming</b></p>
                    <div class="home-events-members-grid js-home-events-coming-members-grid">
                        <div class="home-events-members-grid-item">
                            <img src="images/profile.jpg" alt="">
                            <p class="font-small">Peter</p>
                        </div>
                    </div>
                </div>

                <div class="home-events-free-container">
                    <p class="form-label-margin font-small"><b>Free to Come</b></p>
                    <div class="home-events-members-grid js-home-events-free-members-grid">
                        <div class="home-events-members-grid-item">
                            <img src="images/profile.jpg" alt="">
                            <p class="font-small">Peter</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                `;

        mainContainer.innerHTML = html;
}