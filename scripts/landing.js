import { handleOuterSidebarButtons } from "./sidebar.js";

handleOuterSidebarButtons();

document.querySelector('.landing-start-button')
    .addEventListener('click', () => {
        window.location.href = "login.html";
    });