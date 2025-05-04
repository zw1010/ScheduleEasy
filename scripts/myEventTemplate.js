import { handleInnerSidebarButtons } from "./sidebar.js";

handleInnerSidebarButtons();
renderPage();

function renderPage() {
    const pageContainer = document.querySelector('.js-my-events-details-container');
    let html = "";

    html += `
            <form action="">
                <div class="my-events-details-header-container js-my-events-details-header-container">
                    <div class="my-events-details-header-left">
                        <input class="my-events-form-title form-input font-lg" type="text" name="title" required>
                        <div class="custom-dropdown">
                            <select class="font-small">
                                <option>Group 1</option>
                                <option>Group 2</option>
                                <option>Group 3</option>
                            </select>
                        </div>
                    </div>
                </div>
            
                <div class="my-events-main-container">
                    <div class="my-events-main-left">
                        <label class="form-label-margin font-small" for="desc"><b>Description</b></label>
                        <textarea class="my-events-desc-textarea form-input-margin form-input font-small" name="desc" rows="4"></textarea>
                        <label class="form-label-margin font-small" for="loc"><b>Location</b></label>
                        <textarea class="my-events-loc-textarea form-input-margin form-input font-small" name="loc" rows="2"></textarea>
                        <div class="my-events-datetime-container js-my-events-datetime-container">
                            <div class="my-events-date-container">
                                <label class="form-label-margin font-small" for="date"><b>Date</b></label>
                                <input class="form-input font-small" type="date" name="date" required>
                            </div>
                            <div class="my-events-time-container">
                                <label class="form-label-margin font-small" for="time"><b>Time</b></label>
                                <div class="my-events-time-input-container">
                                    <input class="form-input font-small" type="time" name="from-time" required>
                                    <div class="my-events-time-input-seperator"></div>
                                    <input class="form-input font-small" type="time" name="to-time" required>
                                </div>
                            </div>
                            <div class="my-events-duration-container">
                                <p class="form-label-margin font-small"><b>Duration</b></p>
                                <p class="font-small">2 Hours</p>
                            </div>
                        </div>
                        <button class="button-general font-small js-my-events-save-button">Save</button>
                    </div>
                
                    <div class="my-events-main-right">
                        <div class="my-events-members-container">
                            <p class="form-label-margin font-small"><b>Coming</b></p>
                            <div class="my-events-members-grid js-my-events-coming-members-grid">
                                <div class="my-events-members-grid-item">
                                    <img src="images/profile.jpg" alt="">
                                    <p class="font-small">Peter</p>
                                </div> 
                            </div>
                        </div>
            
                        <div class="my-events-free-container">
                            <p class="form-label-margin font-small"><b>Free to Come</b></p>
                            <div class="my-events-members-grid js-my-events-free-members-grid">
                                <div class="my-events-members-grid-item">
                                    <img src="images/profile.jpg" alt="">
                                    <p class="font-small">Peter</p>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            `;

    pageContainer.innerHTML = html;

    handleSaveOrCreateButton();
}

function handleSaveOrCreateButton() {
    const paramsString = window.location.search;
    const searchParams = new URLSearchParams(paramsString);
    if (searchParams.get("type") === "create") {
        document.querySelector('.js-my-events-details-header-container')
            .innerHTML += `
                        <button class="my-events-create-button button-green font-small">Create</button>
                        `;
        document.querySelector('.js-my-events-save-button')
            .style.display = "none";
        document.querySelector('.js-my-events-datetime-container')
            .style.marginBottom = "0";
                    
    }
}