<template>
  <ul class="products">
    <li class="product">
      <img
        fetchpriority="high"
        decoding="async"
        width="264"
        height="300"
        src="https://zavod-mir.ru/wp-content/uploads/2022/03/ispolnenie-2-6-264x300.png"
        class="product__img"
        alt=""
      />
      <h2 class="product__title">ГОСТ 11371-78 ШАЙБЫ</h2>
    </li>
    <li class="product">
      <img
        decoding="async"
        width="300"
        height="300"
        src="https://zavod-mir.ru/wp-content/uploads/2022/03/kartinka-1-5-300x300.png"
        class="product__img"
        alt=""
        srcset="
          https://zavod-mir.ru/wp-content/uploads/2022/03/kartinka-1-5-300x300.png 300w,
          https://zavod-mir.ru/wp-content/uploads/2022/03/kartinka-1-5-150x150.png 150w,
          https://zavod-mir.ru/wp-content/uploads/2022/03/kartinka-1-5-100x100.png 100w
        "
        sizes="(max-width: 300px) 100vw, 300px"
      />
      <h2 class="product__title">ГОСТ 11648-75 ШАЙБЫ УПОРНЫЕ БЫСТРОСЪЕМНЫЕ</h2>
    </li>
    <li class="product">
      <img
        loading="lazy"
        decoding="async"
        width="300"
        height="300"
        src="https://zavod-mir.ru/wp-content/uploads/2022/03/ispolnenie-1-1-300x300.png"
        class="product__img"
        alt=""
        srcset="
          https://zavod-mir.ru/wp-content/uploads/2022/03/ispolnenie-1-1-300x300.png 300w,
          https://zavod-mir.ru/wp-content/uploads/2022/03/ispolnenie-1-1-150x150.png 150w,
          https://zavod-mir.ru/wp-content/uploads/2022/03/ispolnenie-1-1-100x100.png 100w
        "
        sizes="(max-width: 300px) 100vw, 300px"
      />
      <h2 class="woocommerce-loop-product__title">
        ГОСТ 13463-77 ШАЙБЫ СТОПОРНЫЕ С ЛАПКОЙ
      </h2>
    </li>
    <li class="product">
      <img
        loading="lazy"
        decoding="async"
        width="297"
        height="300"
        src="https://zavod-mir.ru/wp-content/uploads/2022/03/ispolnenie-2-7-297x300.png"
        class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
        alt=""
        srcset="
          https://zavod-mir.ru/wp-content/uploads/2022/03/ispolnenie-2-7-297x300.png 297w,
          https://zavod-mir.ru/wp-content/uploads/2022/03/ispolnenie-2-7-100x100.png 100w
        "
        sizes="(max-width: 297px) 100vw, 297px"
      />
      <h2 class="product__title">ГОСТ 6402-70 ШАЙБЫ ПРУЖИННЫЕ</h2>
    </li>
    <li class="product">
      <img
        loading="lazy"
        decoding="async"
        width="300"
        height="300"
        src="https://zavod-mir.ru/wp-content/uploads/2022/03/ispolnenie-2-1-300x300.png"
        class="product__img"
        alt=""
        srcset="
          https://zavod-mir.ru/wp-content/uploads/2022/03/ispolnenie-2-1-300x300.png 300w,
          https://zavod-mir.ru/wp-content/uploads/2022/03/ispolnenie-2-1-150x150.png 150w,
          https://zavod-mir.ru/wp-content/uploads/2022/03/ispolnenie-2-1-100x100.png 100w
        "
        sizes="(max-width: 300px) 100vw, 300px"
      />
      <h2 class="product__title">Шайбы по ГОСТ 10464-81 с наружными зубьями</h2>
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style scoped>
.products{
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    flex-wrap: wrap;
    color: #fff;
    gap: 50px;
}
.product{
    display: flex;
    align-items: center;
    gap: 40px;
}
</style>
