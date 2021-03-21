'use strict'

// Scroll을 내리면 navbar pink색 적용 올리면 투명
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if(window.scrollY > navbarHeight) {
      navbar.classList.add('navbar__dark');
  } else {
      navbar.classList.remove('navbar__dark');
  }
});

// 메뉴 버튼 클릭 - > 해당 메뉴 scroll 이동
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    scrollIntoView(link);
});


// 'contact me' button을 click 하면 home으로 이동 
const homeContactButton = document.querySelector('.home__contact');
homeContactButton.addEventListener('click', () => {
    scrollIntoView('#contact');
});

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth' });
}