var hamburger = document.querySelector('.hamburger-menu');
var menu = document.querySelector('.menu');
hamburger.addEventListener('click', hamburgerMenu);
function hamburgerMenu(e) {
    // console.log(e.type);
    hamburger.classList.toggle('is-active');
    menu.classList.toggle('active');
}