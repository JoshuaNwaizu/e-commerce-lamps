//////// SHOW MENU
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')
navBodyClose = document.querySelector('.nav__menu')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
/* If nav body is clicked */

if (navClose) {
    navBodyClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
// REMOVE MENU MOBILE
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.querySelector('#nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
// CHANGE BACKGROUND HEADER
function scrollHeader() {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the bg-header class to the header tag
    if (this.scrollY >= 50) header.classList.add('bg-header'); else header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)
// SWIPER POPULAR SECTION 
const popularSwiper = new Swiper('.popular__content', {
  // Optional parameters
  slidesPerView: 'auto',
  centeredSlides: true,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});