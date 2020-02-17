const sideNav = document.querySelector('div.navbar-collapse');
const hamburgerToggler = document.querySelector('.navbar-toggler');
const closeBtn = document.querySelector('.nav-close .nav-link');

closeBtn.addEventListener('click', closeSideNav);
hamburgerToggler.addEventListener('click', initNav);

function initNav() {
    if (sideNav.style.display == "none") {
        sideNav.style.display = "block";
    }
}

function closeSideNav() {
    sideNav.style.display = "none";
}