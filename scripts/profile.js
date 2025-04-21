import { handleInnerSidebarButtons } from "./sidebar.js";

handleInnerSidebarButtons();
handleHeaderImgHover();

function handleHeaderImgHover() {
    const imgOverlay = document.querySelector('.profile-header-img-overlay');
    imgOverlay.addEventListener('mouseover', () => {
        imgOverlay.style.opacity = "1";

    });
    imgOverlay.addEventListener('mouseout', () => {
        imgOverlay.style.opacity = "0";
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

