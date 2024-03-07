<template>
  <div class="current-page">
    <current-page></current-page>
  </div>
  <div class="download">
    <a v-if="+route.params.id === 0" href="/downloads/Plan_zakupok_2024.xlsx" download>
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

a{
  display: flex;
  align-items: center;
}
img{
  @include fluid("height", 50);
}
.download{
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  @include fluid("width", 1825);
  @include fluid("height", 661);
}
.current-page{
  @include fluid("margin-top", 20);
  @include fluid("margin-left", 40);
}
</style>
