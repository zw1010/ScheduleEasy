import { handleInnerSidebarButtons } from "./sidebar.js";

handleInnerSidebarButtons();
handleEventDetailHover();
handleEditButton()

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

function handleEditButton() {
    const editBtn = document.querySelector('.js-my-events-edit-button');
    editBtn.addEventListener('click', () => {
        if (editBtn.innerHTML === "Edit") {
            const deleteBtns = document.querySelectorAll('.js-my-events-delete-button');
            deleteBtns.forEach((deleteBtn) => {
                deleteBtn.style.display = "block";
                editBtn.innerHTML = "Done";
            })
        }
        else if (editBtn.innerHTML === "Done") {
            const deleteBtns = document.querySelectorAll('.js-my-events-delete-button');
            deleteBtns.forEach((deleteBtn) => {
                deleteBtn.style.display = "none";
                editBtn.innerHTML = "Edit";
            })
        }
    })
}
