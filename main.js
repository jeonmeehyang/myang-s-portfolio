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



const home__container = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', ()=> {
    home__container.style.opacity = 1 - window.scrollY / homeHeight;
});

// scroll 내리면 arrow-up 버튼이 생기고 올리면 사라지는
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if (window.scrollY > homeHeight / 2) {
        arrowUp.classList.add('visible');
    } else {
        arrowUp.classList.remove('visible');
    }
});

// Handle click on the "arrow-up" button
arrowUp.addEventListener('click', () => {
    scrollIntoView('#home');
});

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth' });
};