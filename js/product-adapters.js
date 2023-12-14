import {CategoryType} from 'const.js';

export const formatPrice = (price) => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, `&thinsp;`);

const serverCategories = {
  Для_дома: CategoryType.HOME,
  Елочные_игрушки: CategoryType.CHRISTMASS,
  Украшения: CategoryType.ACCESSORIES,
  Картины: CategoryType.PAINTINGS,
};

const filtersNames = {
  [CategoryType.HOME]: {
    "type": `Для дома`,
  },
  [CategoryType.LAPTOPS]: {
    "type": `Тип ноутбука`,
  },
  [CategoryType.CAMERA]: {
    "type": `Тип фотоаппарата`,
  },
  [CategoryType.CARS]: {
    'body-type': `Тип кузова`,
  },
};

export const adaptCategory = (category) => serverCategories[category];

// eslint-disable-next-line max-len
export const adaptFilterName = (category, filter) => filtersNames[category][filter];
// eslint-disable-next-line max-len
export const adaptFilterValue = (category, value) => (filtersValues[category][value] ? filtersValues[category][value] : value);
