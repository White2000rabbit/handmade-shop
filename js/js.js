'use strict'
window.onload = function () {

//Параллакс 
const parallax = document.querySelector('.parallax');
if (parallax) {
   const content = document.querySelector('.parallax__container');
   const frame = document.querySelector('.parallax-img__frame');
   const ocean = document.querySelector('.parallax-img__ocean');
   const palm = document.querySelector('.parallax-img__palm');
   //коэффициенты
   const forFrame = 10;
   const forOcean = 30;
   const forPalm = 20;
   //скорость анимации
   const speed = 0.5;

   let positionX = 0, positionY = 0;
   let coordXprocent = 0, coordYprocent = 0;

   function setParallaxStyle() {
      const distX = coordXprocent - positionX;
      const distY = coordYprocent - positionY;

      positionX = positionX + (distX * speed);
      positionY = positionY + (distY * speed);

      //передаем стили объекта
      frame.style.cssText = `transform: translate(${positionX / forFrame}%,${positionY / forFrame}%);`;
      ocean.style.cssText = `transform: translate(${positionX / forOcean}%,${positionY / forOcean}%);`;
      palm.style.cssText = `transform: translate(${positionX / forPalm}%,${positionY / forPalm}%);`;
   
      requestAnimationFrame(setParallaxStyle);
   }
   setParallaxStyle();
   parallax.addEventListener('mousemove', function (e) {
      const parallaxWidth = parallax.offsetWidth;
      const parallaxHeight = parallax.offsetHeight;
      //0 по середине
      const coordX = e.pageX - parallaxWidth / 2;
      const coordY = e.pageY - parallaxHeight / 2; 
      //получаем процентные значения
      coordXprocent = coordX / parallaxWidth * 100;
      coordYprocent = cordY / parallaxHeight * 100;
   });

   //параллакс при скролле
   let thresholdSets = [];
   for (let i = 0; i <= 1.0; i += 0.005) {
      thresholdSets.push(i);
   }
   const callback = function (entries, observer) {
      const scrollTopProcent = window.pageYOffset / parallax.offsetHeight * 100;
      setParallaxItemsStyle(scrollTopProcent);
   };
   const observer = new IntersectionObserver (callback, {
      threshold: thresholdSets
   });

   observer.observe(document.querySelector('.content'));

   function setParallaxItemsStyle(scrollTopProcent) {
      content.style.cssText = `transform: translate(0%, -${scrollTopProcent / 0.7}%);`;
      ocean.parentElement.style.cssText = `transform: translate(0%, -${scrollTopProcent / 15}%);`;
      palm.parentElement.style.cssText = `transform: translate(0%, -${scrollTopProcent / 7}%);`;
   
   }
}

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
//Бургер-меню
const menuIcon = document.querySelector('.navigation__icon');
menuIcon.addEventListener('click', function(e) {
      const headerMenu = document.querySelector('.header__menu');
      document.body.classList.toggle('_lock');
      menuIcon.classList.toggle('_close');
      headerMenu.classList.toggle('_active');
   }
   )
//Стрелка наверх 
const arrow = document.querySelector('.arrow-top');
window.onscroll = function () {
   const availableScreenHeight = window.screen.availHeight;
   if (window.pageYOffset > availableScreenHeight ) {
   arrow.style.opacity = '1';
   }
   if (window.pageYOffset === '0') {
      arrow.style.opacity = '0';
   }
};

//Модальное окно;
const card = document.querySelectorAll(".card");
const modal = document.querySelector('.modal');
card.forEach(item => {
      item.addEventListener('click', function(e) { 
         e.preventDefault();                              
         const wrap = item.closest('.card');
         const modal_text = document.querySelector('.modal__text');
         const modal_carousel = document.querySelector('.modal__carousel');
         const modal_preview = document.querySelector('.modal__preview');

      modal.classList.add('modal-open');
      modal_carousel.innerHTML = wrap.querySelector('.card__carousel').innerHTML;
      modal_preview.innerHTML = wrap.querySelector('.card__preview').innerHTML;
      modal_text.innerHTML = wrap.querySelector('.card__desc').innerHTML;

      const activePhoto = document.querySelector(".modal__preview");
      const carousel_items = document.querySelectorAll(".card__link");

      carousel_items.forEach(item => {
         item.addEventListener('click', function(e) { 
            e.preventDefault();
            activePhoto.innerHTML = item.innerHTML;
   })
   }   )
      })
   });
         
const toClose = modal.querySelector('.modal__close');
toClose.addEventListener('click', function (evt) {
   evt.preventDefault();
   modal.classList.remove('modal-open')})
/*
//галерея в модальном окне 
let activePhoto = document.querySelector(".card__preview");
let carousel_items = document.querySelector(".card__img");

if (modal.classList.contains('modal-open')) {
   carousel_items.addEventListener('click', function (evt) {
   console.log('yes')
   evt.preventDefault();})
   } 
  /*
for (let i=0; i<=carousel_items.length; i++) { 
   console.log('yno')
  i.addEventListener('click', function (evt) {
    console.log('yes')
   evt.preventDefault();
   img.classList.add('card__preview');
   activePhoto.classList.remove('card__preview');
})
}

/*
 const modal = document.querySelector('#order');
const modalDescription = modal.querySelector('.modal__descr');
const overlay = document.querySelector('.overlay');

document.addEventListener('click', event => {
  const link = event.target.matches('.card .card-container__link');

  if (!link) {
    return;
  }
  const parent = event.target.closest('.card');
  const title = parent.querySelector('.card__title');

  modalDescription.textContent = title.textContent;

  modal.classList.add('is-visible');
  overlay.classList.add('is-visible');
});
*/
}