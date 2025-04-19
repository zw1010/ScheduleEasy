export function handleOuterSidebarButtons() {
    const logo = document.querySelector('.js-outer-sidebar-logo');
    const homeBtn = document.querySelector('.js-outer-sidebar-home');
    const loginBtn = document.querySelector('.js-outer-sidebar-login');

    logo.addEventListener('click', () => {
        window.location.href = "landing.html";
    });
    homeBtn.addEventListener('click', () => {
        window.location.href = "landing.html";
    });
    loginBtn.addEventListener('click', () => {
        window.location.href = "login.html";
    });
}

export function handleInnerSidebarButtons() {
    const logo = document.querySelector('.js-inner-sidebar-logo');
    const homeBtn = document.querySelector('.js-inner-sidebar-home');
    const scheduleBtn = document.querySelector('.js-inner-sidebar-schedule');
    const eventsBtn = document.querySelector('.js-inner-sidebar-events');
    const groupsBtn = document.querySelector('.js-inner-sidebar-groups');
    const invitesBtn = document.querySelector('.js-inner-sidebar-invites');
    const profileBtn = document.querySelector('.js-inner-sidebar-profile');

    logo.addEventListener('click', () => {
        window.location.href = "home.html";
    });
    homeBtn.addEventListener('click', () => {
        window.location.href = "home.html";
    });
    scheduleBtn.addEventListener('click', () => {
        window.location.href = "schedule.html";
    });
    eventsBtn.addEventListener('click', () => {
        window.location.href = "events.html";
    });
    groupsBtn.addEventListener('click', () => {
        window.location.href = "groups.html";
    });
    invitesBtn.addEventListener('click', () => {
        window.location.href = "invites.html";
    });
    profileBtn.addEventListener('click', () => {
        window.location.href = "profile.html";
    });
}
