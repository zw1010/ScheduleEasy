import { handleInnerSidebarButtons } from "./sidebar.js";

handleInnerSidebarButtons();
renderGroups();

function renderGroups() {
    renderMyGroups();
    renderOtherGroups();

    handleMyGroupsEditButton();
    handleOtherGroupsEditButton();
}

// My Groups
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
    handleMyGroupsCreateButton();
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
            window.location.href = "myGroupDetails.html";
        });
    });
}

function handleMyGroupsCreateButton() {
    const createBtn = document.querySelector('.js-groups-create-button');
    createBtn.addEventListener('click', () => {
        renderCreateGroup();
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

// Other Groups
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
            window.location.href = "otherGroupDetails.html";
        });
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

// Create Group
function renderCreateGroup() {
    const newGroupContainer = document.querySelector('.js-groups-add-new-group-container');
    newGroupContainer.innerHTML = `
                                <div class="groups-add-new-group-overlay">
                                    <div class="groups-add-new-group-container">
                                        <form action="">
                                            <button class="group-add-new-group-cross-button js-group-add-new-group-cross-button" type="button">&#10005;</button>
                                            <input class="group-add-new-group-title-input font-med" placeholder="Group name..." type="text" name="name" required>
                                            <div class="groups-add-new-group-search-container">
                                                <input class="groups-add-new-group-search-input form-input font-small" type="text" placeholder="Search..">
                                                <button class="groups-add-new-group-add-button js-groups-add-new-group-add-button button-general font-small" type="button" name="add">Add</button>
                                            </div>
                                            <div class="js-groups-add-new-group-search-result">
                                            </div>
                                            <p class="form-label-margin font-small"><b>Members</b></p>
                                            <div class="groups-add-new-group-members-grid-container js-groups-add-new-group-members-grid-container">      
                                            </div>
                                            <button class="group-add-new-group-create-button 
                                                js-group-add-new-group-create-button button-general font-small"
                                                    type="submit" name="create">
                                                Create
                                            </button>
                                        </form>
                                    </div>
                                </div>
                                `;
                                
    const addBtn = document.querySelector('.js-groups-add-new-group-add-button');
    addBtn.addEventListener('click', () => {
        handleCreateGroupAddButton();
    });
    const crossBtn = document.querySelector('.js-group-add-new-group-cross-button');
    crossBtn.addEventListener('click', () => {
        newGroupContainer.innerHTML = "";
    });
}

function handleCreateGroupAddButton() {
    // Generate Member added
    const memberContainer = document.querySelector('.js-groups-add-new-group-members-grid-container');
    let html = ``;
    for (let i = 0; i < 10; i++) {
        html += `
                <div class="groups-add-new-group-members-grid-item">
                    <img class="groups-add-new-group-members-grid-item-img" src="images/profile.jpg" alt="">
                    <p class="font-small">Peter</p>
                    <button class="group-add-new-group-member-cross-button js-group-add-new-group-member-cross-button">&#10005;</button>
                </div>
                `;
    }
    memberContainer.innerHTML = html;

    // Search result
    const resultContainer = document.querySelector('.js-groups-add-new-group-search-result');
    resultContainer.innerHTML = `
                                <p class="groups-add-new-group-search-result font-small">Result example.</p>
                                `;   
}
