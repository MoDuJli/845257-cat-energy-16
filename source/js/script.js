var navMain = document.querySelector('.main-menu-toggle');
var navToggle = document.querySelector('.main-menu-toggle__button');

navMain.classList.remove('main-menu-toggle--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-menu-toggle--closed')) {
    navMain.classList.remove('main-menu-toggle--closed');
    navMain.classList.add('main-menu-toggle--opened');
  } else {
    navMain.classList.add('main-menu-toggle--closed');
    navMain.classList.remove('main-menu-toggle--opened');
  }
});
