<?php
require('products_db.php');

$id = $_GET['product_id'];
$title = get_product_title($id);
$img_url = get_img_url($id);

require('blocks/product-info.php');
?>