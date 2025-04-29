import { handleInnerSidebarButtons } from "./sidebar.js";

handleInnerSidebarButtons();
renderGroups();

function renderGroups() {
    renderMyGroups();
    renderOtherGroups();

    handleMyGroupsEditButton();
    handleOtherGroupsEditButton();
}


function renderMyGroups() {
    const gridContainer = document.querySelector('.js-my-groups-grid-container');
    let html = "";

    for (let i = 0; i < 6; i++) {
        html += `
            <div class="groups-grid-item">
                <div class="groups-grid-item-main">
                    <p class="groups-grid-item-header font-small"><b>Group 1</b></p>
                    <div class="groups-members-grid-container">
                        <img class="groups-members-img" src="images/profile.jpg" alt="">
                        <img class="groups-members-img" src="images/profile.jpg" alt="">
                        <img class="groups-members-img" src="images/profile.jpg" alt="">
                        <img class="groups-members-img" src="images/profile.jpg" alt="">
                        <img class="groups-members-img" src="images/profile.jpg" alt="">
                        <img class="groups-members-img" src="images/profile.jpg" alt="">
                        <img class="groups-members-img" src="images/profile.jpg" alt="">
                        <img class="groups-members-img" src="images/profile.jpg" alt="">
                        <img class="groups-members-img" src="images/profile.jpg" alt="">
                        <img class="groups-members-img" src="images/profile.jpg" alt="">
                        <img class="groups-members-img" src="images/profile.jpg" alt="">
                        <p class="groups-members-more  font-small">+...</p>
                    </div>
                    <div class="groups-overlay js-my-groups-overlay"></div>
                </div>
                <button class="groups-delete-button button-red font-small js-my-groups-delete-button">Delete</button>
            </div> 
            `;
    }

    gridContainer.innerHTML = html;

    handleMyGroupsHover();
}

function renderOtherGroups() {
    const gridContainer = document.querySelector('.js-other-groups-grid-container');
    let html = "";

    for (let i = 0; i < 6; i++) {
        html += `
            <div class="groups-grid-item">
                <div class="groups-grid-item-main">
                    <p class="groups-grid-item-header font-small"><b>Group 1</b></p>
                    <div class="groups-members-grid-container">
                        <img class="groups-members-img" src="images/profile.jpg" alt="">
                        <img class="groups-members-img" src="images/profile.jpg" alt="">
                        <img class="groups-members-img" src="images/profile.jpg" alt="">
                        <img class="groups-members-img" src="images/profile.jpg" alt="">
                        <img class="groups-members-img" src="images/profile.jpg" alt="">
                        <img class="groups-members-img" src="images/profile.jpg" alt="">
                        <img class="groups-members-img" src="images/profile.jpg" alt="">
                        <img class="groups-members-img" src="images/profile.jpg" alt="">
                        <img class="groups-members-img" src="images/profile.jpg" alt="">
                        <img class="groups-members-img" src="images/profile.jpg" alt="">
                        <img class="groups-members-img" src="images/profile.jpg" alt="">
                        <p class="groups-members-more  font-small">+...</p>
                    </div>
                    <div class="groups-overlay js-other-groups-overlay"></div>
                </div>
                <button class="groups-delete-button button-red font-small js-other-groups-delete-button">Delete</button>
            </div> 
            `;
    }

    gridContainer.innerHTML = html;

    handleOtherGroupsHover();
}


function handleMyGroupsHover() {
    const groupDetails = document.querySelectorAll('.js-my-groups-overlay');
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

function handleOtherGroupsHover() {
    const groupDetails = document.querySelectorAll('.js-other-groups-overlay');
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

function handleMyGroupsEditButton() {
    const editBtn = document.querySelector('.js-my-groups-edit-button');
    editBtn.addEventListener('click', () => {
        if (editBtn.innerHTML === "Edit") {
            const deleteBtns = document.querySelectorAll('.js-my-groups-delete-button');
            deleteBtns.forEach((deleteBtn) => {
                deleteBtn.style.display = "block";
                editBtn.innerHTML = "Done";
            });
        }
        else if (editBtn.innerHTML === "Done") {
            const deleteBtns = document.querySelectorAll('.js-my-groups-delete-button');
            deleteBtns.forEach((deleteBtn) => {
                deleteBtn.style.display = "none";
                editBtn.innerHTML = "Edit";
            });
        }
    });
}

function handleOtherGroupsEditButton() {
    const editBtn = document.querySelector('.js-other-groups-edit-button');
    editBtn.addEventListener('click', () => {
        if (editBtn.innerHTML === "Edit") {
            const deleteBtns = document.querySelectorAll('.js-other-groups-delete-button');
            deleteBtns.forEach((deleteBtn) => {
                deleteBtn.style.display = "block";
                editBtn.innerHTML = "Done";
            });
        }
        else if (editBtn.innerHTML === "Done") {
            const deleteBtns = document.querySelectorAll('.js-other-groups-delete-button');
            deleteBtns.forEach((deleteBtn) => {
                deleteBtn.style.display = "none";
                editBtn.innerHTML = "Edit";
            });
        }
    });
}
