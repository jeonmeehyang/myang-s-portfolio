'use strict'

// Scroll을 내리면 navbar pink색 적용 올리면 투명
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {

  console.log(`navbarHeight: ${navbarHeight}`);
  if(window.scrollY > navbarHeight) {
      navbar.classList.add('navbar__dark');
  } else {
      navbar.classList.remove('navbar__dark');
  }
});



