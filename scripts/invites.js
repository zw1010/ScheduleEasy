import { handleInnerSidebarButtons } from "./sidebar.js";

handleInnerSidebarButtons();

handleGroupDetailHover();

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
