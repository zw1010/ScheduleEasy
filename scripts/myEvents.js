import { handleInnerSidebarButtons } from "./sidebar.js";

handleInnerSidebarButtons();


handleEventDetailHover();

function handleEventDetailHover() {
    const eventDetails = document.querySelectorAll('.js-my-events-overlay');
    eventDetails.forEach((eventDetail) => {
        eventDetail.addEventListener('mouseover', () => {
            eventDetail.style.opacity = "1";
    
        });
        eventDetail.addEventListener('mouseout', () => {
            eventDetail.style.opacity = "0";
        });

        eventDetail.addEventListener('click', () => {
            window.location.href = "myEventsDetails.html";
        });
    });
}
