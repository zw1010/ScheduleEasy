import { handleInnerSidebarButtons } from "./sidebar.js";

handleInnerSidebarButtons();
renderGroups();

function renderGroups() {
    const gridContainer = document.querySelector('.js-group-invites-grid-container');
    let html = "";

    for (let i = 0; i < 6; i++) {
        html += `
            <div class="group-invites-grid-item">
                <div class="group-invites-grid-item-top">
                    <p class="group-invites-grid-item-header font-small"><b>Group 1</b></p>
                    <div class="group-invites-members-grid-container">
                        <img class="group-invites-members-img" src="images/profile.jpg" alt="">
                        <img class="group-invites-members-img" src="images/profile.jpg" alt="">
                        <img class="group-invites-members-img" src="images/profile.jpg" alt="">
                        <img class="group-invites-members-img" src="images/profile.jpg" alt="">
                        <img class="group-invites-members-img" src="images/profile.jpg" alt="">
                        <img class="group-invites-members-img" src="images/profile.jpg" alt="">
                        <img class="group-invites-members-img" src="images/profile.jpg" alt="">
                        <img class="group-invites-members-img" src="images/profile.jpg" alt="">
                        <img class="group-invites-members-img" src="images/profile.jpg" alt="">
                        <img class="group-invites-members-img" src="images/profile.jpg" alt="">
                        <img class="group-invites-members-img" src="images/profile.jpg" alt="">
                        <p class="group-invites-members-more  font-small">+...</p>
                    </div>
                    <div class="group-invites-overlay js-group-invites-overlay"></div>
                </div>
                <div class="group-invites-grid-item-bottom">
                    <button class="button-red font-small" id="group-invites-reject-button">Reject</button>
                    <button class="button-green font-small" id="group-invites-accept-button">Accept</button>
                </div>
            </div> 
            `;
    }

    gridContainer.innerHTML = html;

    handleGroupDetailHover();
}

function handleGroupDetailHover() {
    const groupDetails = document.querySelectorAll('.js-group-invites-overlay');
    groupDetails.forEach((groupDetail) => {
        groupDetail.addEventListener('mouseover', () => {
            groupDetail.style.opacity = "1";
    
        });
        groupDetail.addEventListener('mouseout', () => {
            groupDetail.style.opacity = "0";
        });

        groupDetail.addEventListener('click', () => {
            window.location.href = "invitesDetails.html";
        });
    });
}