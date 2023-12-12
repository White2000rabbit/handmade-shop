<section class="catalog">
   <div class="container">
      <h1 class="vissualy-hidden">Авторские украшения для дома и бижутерия</h1>
      <ul class="products-list">
         <?php foreach($items as $item): ?>
         <li class="card-container card">
            <a class="card-container__link" href="product.php?product_id=1">
               <div class="carousel">
                  <img class='card__img card__img--main' width="100" height="150" src="<?= $item['img_url_1'] ?>" alt="<?= $item[title] ?>">
                  <img class='card__img' src="img/card-1-1.jpeg" width="90" height="90" alt="$item[title] ?>">
               </div>
               <div class='card__desc'>
                  <p class="card__title"><?= $item[title] ?></p>
                  <p class="card__price"><?= $item[price] ?></p>
               </div>
            <a class="card__link" href="#">Проверить наличие</a>
         </li>
         <?php endforeach ?>
      </ul>
   </div>
</section>
