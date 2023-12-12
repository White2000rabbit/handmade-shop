<?php
function get_products() {
   return [
   '1' => [
      'title' => 'Морская лагуна',
      'img_url_1' => 'img/card-1.jpeg',
      'img_url_2' => 'img/card-1-1.jpeg',
      'price' => 7000,
      'discount' => 0,
      'is_new' => false,
      'is_last' => false
   ],
   '2' => [
      'title' => 'Шторм',
      'img_url_1' => 'img/card-2.jpeg',
      'img_url_2' => 'img/card-2-1.jpeg',
      'price' => 3500,
      'discount' => 0,
      'is_new' => false,
      'is_last' => false
   ],
   '3' => [
      'title' => 'Райское наслаждение',
      'img_url_1' => 'img/card-3.jpeg',
      'img_url_2' => 'img/card-3-1.jpeg',
      'price' => 4000,
      'discount' => 0,
      'is_new' => true,
      'is_last' => true
   ],
   '4' => [
      'title' => 'Лес',
      'img_url_1' => 'img/card-4.jpeg',
      'img_url_2' => 'img/card-4-1.jpeg',
      'price' => 5000,
      'discount' => 3000,
      'is_new' => true,
      'is_last' => true
   ],
   '5' => [
      'title' => 'Черный песок',
      'img_url_1' => 'img/card-5.jpeg',
      'img_url_2' => 'img/card-5-1.jpeg',
      'price' => 5000,
      'discount' => 3000,
      'is_new' => true,
      'is_last' => true
   ],
   '6' => [
      'title' => 'Черепахи',
      'img_url_1' => 'img/card-6.jpeg',
      'img_url_2' => 'img/card-6-1.jpeg',
      'price' => 4000,
      'discount' => 500,
      'is_new' => true,
      'is_last' => false
   ],
   '7' => [
      'title' => 'Пряничный домик',
      'img_url_1' => 'img/card-7.jpeg',
      'img_url_2' => 'img/card-7-1.jpeg',
      'price' => 15000,
      'discount' => 4500,
      'is_new' => true,
      'is_last' => true
   ],
   '8' => [
      'title' => 'Елка',
      'img_url_1' => 'img/card-8.jpeg',
      'img_url_2' => 'img/card-8-1.jpeg',
      'price' => 5000,
      'discount' => 0,
      'is_new' => true,
      'is_last' => false
    ],
    '9' => [
      'title' => 'Набор, 6 шт.',
      'img_url_1' => 'img/card-9.jpeg',
      'img_url_2' => 'img/card-9-1.jpeg',
      'price' => 20000,
      'discount' => 3000,
      'is_new' => true,
      'is_last' => true
    ],
    '10' => [
      'title' => 'Часы',
      'img_url_1' => 'img/card-10.jpeg',
      'img_url_2' => 'img/card-10-1.jpeg',
      'price' => 7000,
      'discount' => 2000,
      'is_new' => false,
      'is_last' => true
    ],
    '11' => [
      'title' => 'Подставка. Ракушка.',
      'img_url_1' => 'img/card-11.jpeg',
      'img_url_2' => 'img/card-11-1.jpeg',,
      'price' => 3500,
      'discount' => 500,
      'is_new' => true,
      'is_last' => false
    ],
    '12' => [
      'title' => 'Подставка. Квадрат',
      'img_url_1' => 'img/card-12.jpeg',
      'img_url_2' => 'img/card-12-1.jpeg',,
      'price' => 5000,
      'discount' => 20,
      'is_new' => true,
      'is_last' => true
    ],
    '13' => [
      'title' => 'Подставка. Многоугольник в  разных цветах',
      'img_url_1' => 'img/card-13.jpeg',
      'img_url_2' => 'img/card-13-1.jpeg',,
      'price' => 1500,
      'discount' => 0,
      'is_new' => false,
      'is_last' => false
    ],
    '14' => [
      'title' => 'Подставка. Рука (мини)',
      'img_url_1' => 'img/card-14.jpeg',
      'img_url_2' => 'img/card-14-1.jpeg',,
      'price' => 3000,
      'discount' => 20,
      'is_new' => true,
      'is_last' => false
    ],
    '15' => [
      'title' => 'Гранат. Брошь',
      'img_url_1' => 'img/card-15.jpeg',
      'img_url_2' => 'img/card-15-1.jpeg',,
      'price' => 2000,
      'discount' => 100,
      'is_new' => true,
      'is_last' => true
    ],
    '16' => [
      'title' => 'Кусочек моря, кулон',
      'img_url_1' => 'img/card-16.jpeg',
      'img_url_2' => 'img/card-16-1.jpeg',,
      'price' => 2200,
      'discount' => 20,
      'is_new' => true,
      'is_last' => false
    ],
    '17' => [
      'title' => 'Кусочек острова, кулон',
      'img_url_1' => 'img/card-17.jpeg',
      'img_url_2' => 'img/card-17-1.jpeg',,
      'price' => 100,
      'discount' => 0,
      'is_new' => true,
      'is_last' => true
    ],
    '18' => [
      'title' => 'Скаты',
      'img_url_1' => 'img/card-18.jpeg',
      'img_url_2' => 'img/card-18-1.jpeg',,
      'price' => 200,
      'discount' => 20,
      'is_new' => true,
      'is_last' => false
    ],
   ];
}

function get_product_attribute($id, $attr) {
   $products = get_products();
   $result = $products[$id][$attr] ?? null;
   return $result;
}
function get_product_price($id) {
   return get_product_attribute($id, 'price');
}
function get_product_title($id) {
   return get_product_attribute($id, 'title');
}
function get_img_url($id) {
   return get_product_attribute($id, 'img_url');
}
function get_product_discount($id) {
   return get_product_attribute($id, 'discount');
}
function get_product_is_new($id) {
   return get_product_attribute($id, 'is_new');
}
function get_product_is_last($id) {
   return get_product_attribute($id, 'is_last');
}