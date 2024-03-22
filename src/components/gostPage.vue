<template>
  <div class="current-page">
    <current-page></current-page>
  </div>
  <ul class="products">
    <li class="product">
      <img
        fetchpriority="high"
        decoding="async"
        src="https://zavod-mir.ru/wp-content/uploads/2022/03/ispolnenie-2-6-264x300.png"
        class="product__img"
        alt=""
      />
      <h2 class="product__title">ГОСТ 11371-78 ШАЙБЫ</h2>
    </li>
    <li class="product">
      <img
        decoding="async"
        src="https://zavod-mir.ru/wp-content/uploads/2022/03/kartinka-1-5-300x300.png"
        class="product__img"
        alt=""
      />
      <h2 class="product__title">ГОСТ 11648-75 ШАЙБЫ УПОРНЫЕ БЫСТРОСЪЕМНЫЕ</h2>
    </li>
    <li class="product">
      <img
        loading="lazy"
        decoding="async"
        src="https://zavod-mir.ru/wp-content/uploads/2022/03/ispolnenie-1-1-300x300.png"
        class="product__img"
        alt=""
      />
      <h2 class="woocommerce-loop-product__title">
        ГОСТ 13463-77 ШАЙБЫ СТОПОРНЫЕ С ЛАПКОЙ
      </h2>
    </li>
    <li class="product">
      <img
        loading="lazy"
        decoding="async"
        src="https://zavod-mir.ru/wp-content/uploads/2022/03/ispolnenie-2-7-297x300.png"
        class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
        alt=""
      />
      <h2 class="product__title">ГОСТ 6402-70 ШАЙБЫ ПРУЖИННЫЕ</h2>
    </li>
    <li class="product">
      <img
        loading="lazy"
        decoding="async"
        src="https://zavod-mir.ru/wp-content/uploads/2022/03/ispolnenie-2-1-300x300.png"
        class="product__img"
        alt=""
      />
      <h2 class="product__title">Шайбы по ГОСТ 10464-81 с наружными зубьями</h2>
    </li>
  </ul>
</template>

<script setup>
import currentPage from "./currentPage.vue";
</script>

<style scoped>
.current-page {
  margin-top: 50px;
  margin-left: 40px;
}
.products {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  flex-wrap: wrap;
  color: #fff;
  gap: 50px;
}
.product {
  display: flex;
  align-items: center;
  gap: 40px;
}
@media (min-width: 200px) and (max-width: 600px) {
  ul{
    padding: 0;
  }
  .product {
    font-size: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
    border-bottom: #fff 1px solid;
  }
}
</style>
