
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
const link = document.querySelectorAll(".card-container__link")

link.forEach(item => {
      item.addEventListener('click', function() {
      const wrap = item.closest('.card');
      const modal_desc = document.querySelector('.modal__descr');
      const modal = document.querySelector('.modal');
      modal.classList.add('modal-open')
      modal_desc.textContent = wrap.querySelector('.card-container__link > div').textContent;
   });
});

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