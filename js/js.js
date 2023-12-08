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

//Модальное окно
const popUp = document.querySelectorAll(".modal");
const link = document.querySelectorAll(".card-container__link");
const close = document.querySelector(".modal__close");

link.onclick = openPopup();

function openPopup (evt) {
   Event.preventDefault;
   popUp.style.display = "block";
}
