import { handleInnerSidebarButtons } from "./sidebar.js";

handleInnerSidebarButtons();
renderPage();

function renderPage() {
    const container = document.querySelector('.js-profile-container');
    let html = "";

    html += `
           <div class="profile-header-container">
                <div class="profile-header-img-container">
                    <img class="profile-header-img" src="images/profile.jpg" alt="">
                    <form action="">
                        <label for="profile-image">
                            <div class="profile-header-img-overlay">
                                <img src="images/camera-icon.png" alt="">
                            </div> 
                        </label>
                        <input class="profile-header-img-input" type="file" id="profile-image" name="profile-image" accept="image/*">
                    </form>
                </div>
                <p class="profile-header-text font-lg">Peter</p>
                <button class="profile-logout-button button-red font-small js-profile-logout-button">Log Out</button>
            </div>

            <div class="profile-main-container">
                <form action="">
                    <div class="profile-main-left">
                        <p class="profile-email-header font-small"><b>Email</b></p>
                        <p class="profile-email font-small">abc@gmail.com</p>


                        <label class="form-label-margin font-small" for="name"><b>Display Name</b></label>
                        <input class="profile-name form-input font-small" name="name" required>

                        <button class="button-general font-small" type="submit">Change</button>
                    </div>
                    <p class="profile-name-result font-small js-profile-name-result"></p>
                </form>

                <form action="">
                    <div class="profile-main-right">
                        <label class="form-label-margin font-small" for="oldPass"><b>Old Password</b></label>
                        <input class="profile-pass-old form-input-margin form-input font-small" type="password" name="oldPass" required>
                    
                        <label class="form-label-margin font-small" for="newPass"><b>New Password</b></label>
                        <input class="form-input-margin form-input font-small" type="password" name="newPass" required>
                        
                        <label class="form-label-margin font-small" for="newPassCfm"><b>Confirm New Password</b></label>
                        <input class="profile-pass-new-cfm form-input font-small" type="password" name="newPassCfm" required>

                        <button class="button-general font-small" type="submit">Change</button>
                    </div>
                    <p class="profile-change-pass-result font-small js-profile-change-pass-result"></p>
                </form>
            </div>
            `;

    container.innerHTML = html;

    handleHeaderImgHover();
    handleLogout();
}

function handleHeaderImgHover() {
    const imgOverlay = document.querySelector('.profile-header-img-overlay');
    imgOverlay.addEventListener('mouseover', () => {
        imgOverlay.style.opacity = "1";

    });
    imgOverlay.addEventListener('mouseout', () => {
        imgOverlay.style.opacity = "0";
    });
}

function handleLogout() {
    const logoutButton = document.querySelector('.js-profile-logout-button');
    logoutButton.addEventListener('click', () => {
        // Clear session

        // Go to landing
        window.location.href = "landing.html";
    });
}

function handleImgUpload() {
    const img = document.querySelector('.profile-header-img');
    const imgInput = document.getElementById('profileImage');

    //Submit form when file is selected
    imgInput.onchange = () => {
        imgInput.submit();
    }
}

