import { handleInnerSidebarButtons } from "./sidebar.js";

handleInnerSidebarButtons();
handleEventDetailHover();
handleMyEventsDetailsHover();
handleSeeAllButton();

function handleEventDetailHover() {
    const eventDetails = document.querySelectorAll('.js-home-overlay');
    eventDetails.forEach((eventDetail) => {
        eventDetail.addEventListener('mouseover', () => {
            eventDetail.style.opacity = "1";
    
        });
        eventDetail.addEventListener('mouseout', () => {
            eventDetail.style.opacity = "0";
        });

        eventDetail.addEventListener('click', () => {
            window.location.href = "homeEventsDetails.html";
        });
    });
}


function handleMyEventsDetailsHover() {
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

function handleSeeAllButton() {
    const seeAllBtn = document.querySelector('.js-home-my-events-button');
    seeAllBtn.addEventListener('click', () => {
        window.location.href = "myEvents.html";
    });
}