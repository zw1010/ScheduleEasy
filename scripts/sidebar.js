export function handleOuterSidebarButtons() {
    const homeBtn = document.querySelector('.js-outer-sidebar-home');
    const loginBtn = document.querySelector('.js-outer-sidebar-login');
    const logo = document.querySelector('.js-outer-sidebar-logo');


    homeBtn.addEventListener('click', () => {
        window.location.href = "landing.html";
    });
    loginBtn.addEventListener('click', () => {
        window.location.href = "login.html";
    });
    logo.addEventListener('click', () => {
        window.location.href = "landing.html";
    });
}
