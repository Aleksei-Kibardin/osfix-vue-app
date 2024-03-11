<template>
  <div class="head">
    <div class="current-page">
      <current-page></current-page>
    </div>
    <img
      src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.cgr-international.com/wp-content/uploads/2023/10/CGR-International_bandeau_acquisition_0-1.jpg"
      alt=""
    />
  </div>
  <div class="download">
    <a
      v-if="+route.params.id === 0"
      href="/downloads/Plan_zakupok_2024.xlsx"
      download
    >
      <img
        src="https://s1.iconbird.com/ico/2013/12/520/w256h2561387130025Downloads01.png"
        alt=""
      />
      скачать "План закупок"
    </a>
    <a v-if="+route.params.id === 1" href="/downloads/ведомость.pdf" download>
      <img
        src="https://s1.iconbird.com/ico/2013/12/520/w256h2561387130025Downloads01.png"
        alt=""
      />
      скачать "Реализация закупок"
    </a>
  </div>
</template>

<script setup>
import currentPage from "./currentPage.vue";
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<style scoped lang="scss">
@import "../fluid.sass";
.head {
  @include fluid("height", 500);
  img {
    width: 94vw;
    height: 100%;
  }
}
a {
  display: flex;
  align-items: center;
}
img {
  @include fluid("height", 50);
}
.download {
  display: flex;
  justify-content: center;
  color: #fff;
  @include fluid("width", 1825);
  @include fluid("height", 200);
}
.current-page {
  position: absolute;
  z-index: 2;
  @include fluid("top", 450);
  @include fluid("left", 140);
}
</style>
