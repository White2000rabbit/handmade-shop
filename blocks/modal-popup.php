<?php
require('products_db.php');
$id = $_GET['product_id'];
$title = get_product_title($id);
$img_url_1 = get_img_url_1($id);
$img_url_2 = get_img_url_2($id);
$price = get_price($id);
require('blocks/card.php');
?>
<div id="openModal8" class="modal">
   <div class="modal__body">
      <a href="#close" class="modal__close fa-regular fa-circle-xmark" title="close"></a>
         <div class="modal__container">
            <div class="modal carousel modal__column">
               <input type="radio" name="" id="1" checked>
                  <input type="radio" name="" id="2">
                     <div class="modal_slider">
                           <div class="modal_slides modal_slide">
                              <img class='carousel__img' src="$img_url_1" width="70" height="90" alt="$title">
                           </div>
                           <div class="modal_slides modal_slide">
                              <img class='modal__img' src="$img_url_1" width="70" height="90" alt="$title">
                           </div>
                        </div>
                        <div class="controls">
                           <label for="1"></label>
                           <label for="2"></label>
                        </div>
                     </div>
                     <div class="modal__column">
                        <p class="card__desc">$title</p>
                        <p class="card__price">$price</p>
                     </div>
                  </div>
               </div>
            </div>