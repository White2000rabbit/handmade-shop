//Бургер-меню
const menuIcon = document.querySelector('.menu__icon');
if (menuIcon) {
   const headerMenu = document.querySelector('.header__menu');
   menuIcon.addEventListener('click', function(e) {
      document.body.classList.toggle('_lock');
      menuIcon.classList.toggle('_active');
      headerMenu.classList.toggle('_active');
   }
   )
}

