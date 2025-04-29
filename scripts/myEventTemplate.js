import { handleInnerSidebarButtons } from "./sidebar.js";

handleInnerSidebarButtons();
renderPage();

function renderPage() {
    renderComingMembers();
    renderFreeMembers();
}

function renderComingMembers() {
    const comingContainer = document.querySelector('.js-my-events-coming-members-grid');

    let html = "";

    for (let i = 0; i < 7; i++) {
        html += `
            <div class="my-events-members-grid-item">
                <img src="images/profile.jpg" alt="">
                <p class="font-small">Peter</p>
            </div> 
            `;
    }

    comingContainer.innerHTML = html;
}

function renderFreeMembers() {
    const freeContainer = document.querySelector('.js-my-events-free-members-grid');

    let html = "";

    for (let i = 0; i < 6; i++) {
        html += `
            <div class="my-events-members-grid-item">
                <img src="images/profile.jpg" alt="">
                <p class="font-small">Peter</p>
            </div> 
            `;
    }

    freeContainer.innerHTML = html;
}