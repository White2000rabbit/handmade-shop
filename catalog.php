<?php
   require('products_db.php');
   require("blocks/header.php");
   require("blocks/filter-aside.php");
   require("blocks/nav-line.php");

   $items = [
      0 => [
      'img_url_1' => 'img/item-mseyulida.jpg',
      'img_url_2' => 'img/item-mseyulida.jpg',
      'title' => 'Лампа Мсеюлида',
      'price' => 4000,
      'type' => 'ligthing'
      ];
      1 => [
         'title' => 'Морская лагуна',
         'img_url_1' => 'img/card-1.jpeg',
         'img_url_2' => 'img/card-1-1.jpeg',
         'price' => 7000,
         'type' => '',
      ],
      2 => [
         'title' => 'Шторм',
         'img_url_1' => 'img/card-2.jpeg',
         'img_url_2' => 'img/card-2-1.jpeg',
         'price' => 3500,
         'type' => '',
      ],
      3 => [
         'title' => 'Райское наслаждение',
         'img_url_1' => 'img/card-3.jpeg',
         'img_url_2' => 'img/card-3-1.jpeg',
         'p'type' => '',rice' => 4000,
         
      ],
      4 => [
         'title' => 'Лес',
         'img_url_1' => 'img/card-4.jpeg',
         'img_url_2' => 'img/card-4-1.jpeg',
         'price' => 5000,
         'type' => '',
      ],
      5 => [
         'title' => 'Черный песок',
         'img_url_1' => 'img/card-5.jpeg',
         'img_url_2' => 'img/card-5-1.jpeg',
         'price' => 5000,
         
      ],
      6 => [
         'title' => 'Черепахи',
         'img_url_1' => 'img/card-6.jpeg',
         'img_url_2' => 'img/card-6-1.jpeg',
         'price' => 4000,
         'type' => '',
      ],
      7 => [
         'title' => 'Пряничный домик',
         'img_url_1' => 'img/card-7.jpeg',
         'img_url_2' => 'img/card-7-1.jpeg',
         'price' => 15000,
         'type' => '',
      ],
      8 => [
         'title' => 'Елка',
         'img_url_1' => 'img/card-8.jpeg',
         'img_url_2' => 'img/card-8-1.jpeg',
         'price' => 5000,
         'type' => '',
      ],
      9 => [
         'title' => 'Набор, 6 шт.',
         'img_url_1' => 'img/card-9.jpeg',
         'img_url_2' => 'img/card-9-1.jpeg',
         'price' => 20000,
         'type' => '',
      ],
      10 => [
         'title' => 'Часы',
         'img_url_1' => 'img/card-10.jpeg',
         'img_url_2' => 'img/card-10-1.jpeg',
         'price' => 7000,
         'type' => '',
      ],
      11 => [
         'title' => 'Подставка. Ракушка.',
         'img_url_1' => 'img/card-11.jpeg',
         'img_url_2' => 'img/card-11-1.jpeg',,
         'price' => 3500,
         'type' => '',
      ],
      12 => [
         'title' => 'Подставка. Квадрат',
         'img_url_1' => 'img/card-12.jpeg',
         'img_url_2' => 'img/card-12-1.jpeg',,
         'price' => 5000,
         'type' => '',
      ],
      13 => [
         'title' => 'Подставка. Многоугольник в  разных цветах',
         'img_url_1' => 'img/card-13.jpeg',
         'img_url_2' => 'img/card-13-1.jpeg',,
         'price' => 1500,
         'type' => '',
      ],
      14 => [
         'title' => 'Подставка. Рука (мини)',
         'img_url_1' => 'img/card-14.jpeg',
         'img_url_2' => 'img/card-14-1.jpeg',,
         'price' => 3000,
         'type' => '',
      ],
      15 => [
         'title' => 'Гранат. Брошь',
         'img_url_1' => 'img/card-15.jpeg',
         'img_url_2' => 'img/card-15-1.jpeg',,
         'price' => 2000,
         'type' => '',
      ],
      16 => [
         'title' => 'Кусочек моря, кулон',
         'img_url_1' => 'img/card-16.jpeg',
         'img_url_2' => 'img/card-16-1.jpeg',,
         'price' => 2200,
         'type' => '',
      ],
      17 => [
         'title' => 'Кусочек острова, кулон',
         'img_url_1' => 'img/card-17.jpeg',
         'img_url_2' => 'img/card-17-1.jpeg',,
         'price' => 100,
         'type' => '',
      ],
      18 => [
         'title' => 'Скаты',
         'img_url_1' => 'img/card-18.jpeg',
         'img_url_2' => 'img/card-18-1.jpeg',,
         'price' => 200,
         'type' => '',
       ],
      ];

   require("blocks/products-list.php");
   require("blocks/modal-popup.php");
   require("blocks/arrow-top.php");
   require("blocks/footer.php");
?>
