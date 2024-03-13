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
footer{
  position: absolute!important;
}
.head {
  width: 100%;
  img {
    width: 100%;
    height: 400px;
  }
}
a {
  display: flex;
  align-items: center;
}
img {
  height: 50px;
}
.download {
  display: flex;
  justify-content: center;
  color: #fff;
  width: 100vw;
  height: 70vh;
}
.current-page {
  position: absolute;
  z-index: 2;
  @include fluid("top", 450);
  @include fluid("left", 140);
}
@media (min-width: 700px) and (max-width: 1000px) {
  .current-page {
    top: 27%;
  }
  .head {
    img {
      height: 300px;
    }
  }
  .download {
    width: 100%;
  }
}
@media (min-width: 400px) and (max-width: 699px) {
  .current-page {
  top: 20%;
}
  .head {
    img {
      height: 200px;
    }
  }
  .download {
    width: 100%;
  }
}
@media (min-width: 200px) and (max-width: 399px) {
  .current-page {
  top: 15%;
}
  .head {
    img {
      height: 150px;
    }
  }
  .download {
    margin-top: 100px;
    width: 100%;
  }
}
</style>
