const home = document.getElementById('home');
const christmas = document.querySelectorAll("input[name=christmas]");
const accessories = document.querySelectorAll("input[name=accessories]");
const painting = document.querySelectorAll("input[name=painting]");
const card = document.querySelectorAll(".card");
const cardHome = document.querySelectorAll(".card[data-check=painting]"); 
const cardPaintings = document.querySelectorAll(".card[data-check=painting]");
const cardAccessories = document.querySelectorAll(".card[data-check=painting]");
const cardChristmas = document.querySelectorAll(".card[data-check=painting]");
const checkboxes = document.querySelectorAll('input[id]');

for (let checkbox of checkboxes) {
   checkbox.addEventListener('change', function() {
      console.log('change')
      const checkId = checkbox.getAttribute('data-filter');
      const allCards = document.querySelectorAll('.card');
      
      allCards.forEach(function (card) {
         if (checkbox.checked) {
            if (card.getAttribute('data-check') == checkId) {
               card.classList.add('card-show'); 
               card.classList.remove('card-hidden');
            } else {
               card.classList.add('card-hidden');
               card.classList.remove('card-show');
            }
         } else {
            card.classList.add('card-show');
            card.classList.remove('card-hidden');
            console.log('all-show')
         }
      })
   })
};

/*
   function isShow (type) {
      for (let i = 0; i < card.length; i++) {
         if (this.checked) {
            if (card[i].getAttribute('data-check') === type) {
               card[i].classList.add('card-show');
               card[i].classList.remove('card-hidden');
               console.log('rtt')
            } else {
               card[i].classList.add('card-hidden');
               card[i].classList.remove('card-show');
            }
         } else {
            card[i].classList.add('card-show');
            card[i].classList.remove('card-hidden');
            console.log('ffjgjgggg')
         }
      }
   };
*/
//ВЕРХНИЙ ФИЛЬТР

const filters = document.querySelectorAll('a[data-filter]');
for (let filter of filters) {
   filter.addEventListener('click', function(e) {
      console.log('click')
      e.preventDefault();
      const catId = filter.getAttribute('data-filter');
      const allCards = document.querySelectorAll('.card');
      
      allCards.forEach(function (card) {
         if (card.getAttribute('data-check') == catId){
               card.classList.add('card-show');
               card.classList.remove('card-hidden');
            } else {
               card.classList.add('card-hidden');
               card.classList.remove('card-show');
            }
      })
   });
}
/* home.addEventListener("change", isShow());
   function isShow () {
      for (let i = 0 ; i < card.length; i++) {
         if (this.checked) {
            if (card[i].getAttribute('data-check') === 'home') {
               card[i].classList.add('card-show');
               card[i].classList.remove('card-hidden');
               console.log('rtt')
            } else {
               card[i].classList.add('card-hidden');
               card[i].classList.remove('card-show');
            }
         } else {
            card[i].classList.add('card-show');
            card[i].classList.remove('card-hidden');
            console.log('rtt')
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
