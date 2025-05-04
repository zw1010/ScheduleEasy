import { handleInnerSidebarButtons } from "./sidebar.js";

handleInnerSidebarButtons();
renderPage();

function renderPage() {
    const container = document.querySelector('.js-invites-details-container');
    let html = "";

    html += `
            <div class="invites-details-header-container">
                <div class="invites-details-header">
                    <p class="invites-details-title font-lg">Group 1</p>
                    <button class="button-general font-small" id="invites-details-reject-button">Reject</button>
                    <button class="button-general font-small" id="invites-details-accept-button">Accept</button>    
                </div>
            </div>

            <div class="invites-details-main-container">
                <div class="invites-details-main-left">
                    <p class="invite-details-left-title font-lg">Members</p>
                    <div class="invites-details-members-grid">
                        <div class="invites-details-grid-item">
                            <img src="images/profile.jpg" alt="">
                            <p class="font-small">Peter</p>
                        </div>
                        <div class="invites-details-grid-item">
                            <img src="images/profile.jpg" alt="">
                            <p class="font-small">Peter</p>
                        </div>
                        <div class="invites-details-grid-item">
                            <img src="images/profile.jpg" alt="">
                            <p class="font-small">Peter</p>
                        </div>
                        <div class="invites-details-grid-item">
                            <img src="images/profile.jpg" alt="">
                            <p class="font-small">Peter</p>
                        </div>
                        <div class="invites-details-grid-item">
                            <img src="images/profile.jpg" alt="">
                            <p class="font-small">Peter</p>
                        </div>
                        <div class="invites-details-grid-item">
                            <img src="images/profile.jpg" alt="">
                            <p class="font-small">Peter</p>
                        </div>
                        <div class="invites-details-grid-item">
                            <img src="images/profile.jpg" alt="">
                            <p class="font-small">Peter</p>
                        </div>
                        <div class="invites-details-grid-item">
                            <img src="images/profile.jpg" alt="">
                            <p class="font-small">Peter</p>
                        </div>
                        <div class="invites-details-grid-item">
                            <img src="images/profile.jpg" alt="">
                            <p class="font-small">Peter</p>
                        </div>
                    </div>
                </div>

                <div class="invites-details-main-right">
                    <p class="invite-details-right-title font-lg">Owned By</p>
                    <div class="invites-details-owner-container">
                        <img src="images/profile.jpg" alt="">
                        <p class="font-small">Peter</p>
                    </div>
                </div>
            </div>
            `;

    container.innerHTML = html;
}