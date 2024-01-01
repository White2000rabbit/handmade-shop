
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
const menuIcon = document.querySelector('.menu__icon');
menuIcon.addEventListener('click', function(e) {
      const headerMenu = document.querySelector('.header__menu');
      document.body.classList.toggle('_lock');
      menuIcon.classList.toggle('_active');
      headerMenu.classList.toggle('_active');
   }
   )

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