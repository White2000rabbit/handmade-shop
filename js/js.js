const home = document.getElementById('home');
const christmas = document.querySelectorAll("input[name=christmas]");
const accessories = document.querySelectorAll("input[name=accessories]");
const painting = document.querySelectorAll("input[name=painting]");
const card = document.querySelectorAll(".card");
const cardHome = document.querySelectorAll(".card[data-check=painting]"); 
const cardPaintings = document.querySelectorAll(".card[data-check=painting]");
const cardAccessories = document.querySelectorAll(".card[data-check=painting]");
const cardChristmas = document.querySelectorAll(".card[data-check=painting]");

   function isShow (type) {
      for (let i = 0; i < card.length; i++) {
         if (type.checked) {
            if (card[i].getAttribute('data-check') === type) {
               card[i].classList.add('card-show');
               card[i].classList.remove('card-hidden');
            } else {
               card[i].classList.add('card-hidden');
               card[i].classList.remove('card-show');
            }
         } else {
            card[i].classList.add('card-show');
            card[i].classList.remove('card-hidden');
         }
      }
   };
   isShow(home);
   home.addEventListener("change", isShow(home));

   /*
   function isShow () {
      for (let i = 0 ; i < card.length; i++) {
         if (this.checked) {
            if (card[i].getAttribute('data-check') === 'home') {
               card[i].classList.add('card-show');
               card[i].classList.remove('card-hidden');
            } else {
               card[i].classList.add('card-hidden');
               card[i].classList.remove('card-show');
            }
         } else {
            card[i].classList.add('card-show');
            card[i].classList.remove('card-hidden');
         }
      }
   }
   

/*
if (home.checked) {
   cardHome.classListAdd('show');
} else {
   cardHome.classListAdd('hidden');
}
if (christmas.checked) {
   cardChristmas.classListAdd('show');
} else {
   cardChristmas.classListAdd('hidden');
}
if (accessories.checked) {
   cardAccessories.classListAdd('show');
} else {
   cardAccessories.classListAdd('hidden');
}
if (painting.checked) {
   cardPaintings.classListAdd('show');
} else {
   cardPaintings.classListAdd('hidden');
}
*/
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
