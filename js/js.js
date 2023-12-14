import {CategoryType} from 'const.js';

const createRangeFilterTemplate = () => `<div></div>`;

export class FilterAllView extends AbstractFilterView {
   getTemplate() {
      return createRangeFilterTemplate();
   }
}

//фильтр категории
export const getCategoryProducts = (products, category) => {
   return products.filter((product) => product.category === category);
};
 //фильтр по цене
export const getProductsPriceRanges = (products) => {
   const prices = products.map((product) => product.price);

   return {
      min: Math.min.apply(null, prices),
      max: Math.max.apply(null, prices),
   };
};
//выбранная категория
const checkCategory = (category, product) => {
   return category === CategoryType.ALL || product.category === category;
};

const checkPrice = (filters, product) => (
   (!filters.minPrice || product.price >= filters.minPrice) &&
   (!filters.maxPrice || product.price <= filters.maxPrice)
);

export const filterProducts = (products, category, filters) => products.filter((product) => {
   if (!(product.filters && checkCategory(category, product) && checkPrice(filters, product))) {
      return false;
   }
switch (category) {
   case CategoryType.HOME:
   return (
      checkhomeType(filters[`home-type`], product.filters.type)
   );
   case CategoryType.CHRISTMASS:
   return (
      checkchristmassType(filters[`christmass-type`], product.filters.type)
   );
   case CategoryType.ACCESSORIES:
   return (
      checkaccessoriesType(filters[`accessories-type`], product.filters.type) 
   );
   case CategoryType.PAINTINGS:
   return (
      checkpaintingsType(filters[`paintings-type`], product.filters[`paintings-type`])
   );
   default:
   return true;
   }
});


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
